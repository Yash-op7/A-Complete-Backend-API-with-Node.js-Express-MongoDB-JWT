const { signupSchema } = require("../middlewares/validator");

exports.signup = async function (req, res) {
  // res.send('signup completed!');
  const { email, password } = req.body;

  try {
    const { err } = signupSchema.validate(req.body);
  } catch (error) {
    // console.log(error);
    return res
      .status(401)
      .json({ success: false, message: "provide correct inputs" });
  }
};
