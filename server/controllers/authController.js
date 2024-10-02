const { signupSchema } = require("../middlewares/validator");

const jwt = require('jsonwebtoken');

const { doHash, doHashValidation } = require("../utils/hashing");

const User = require("../models/userModel");

exports.signup = async function (req, res) {
  const { email, password } = req.body;
  try {
    const { err } = signupSchema.validate(req.body);
  } catch (error) {
    // console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "provide correct inputs" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(401).json({
      success: false,
      message: "user already exists",
    });
  }

  // create a new user and push to db
  // generate hash for pwd
  // then create a user with email and pwd
  // user.save()

  try {
    const hashedPassword = await doHash(password, 10);

    const newUser = new User({ email, password: hashedPassword });
    const result = await newUser.save();
    result.password = undefined;
    res.status(201).json({
      success: true,
      message: "created user",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.signin = async function (req, res) {
  // get the user email and password
  // validate it
  // fetch it from the users db
  // await bcrypt.compare

  const { email, password } = req.body;

  try {
    const { err } = signupSchema.validate(req.body);
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, message: "invalid input format." });
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return res.status(401).json({
      success: false,
      message: "user doesn't exist.",
    });
  }

  try {
    const isValid = await doHashValidation(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        success: false,
        message: "incorrect password for the given user",
      });
    }

    // jwt
    const user_object = {
        userId: user._id,
        email: user.email,
        verified: user.verified
    }
    const token = jwt.sign(user_object, secret)


    return res.status("200").json({
      success: true,
      message: "you are now logged in",
    });
  } catch (error) {
    console.log(error);
  }
};
