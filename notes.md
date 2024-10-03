# mistakes made:
### - it is `module.exports`
- app.use(express.urlencoded({extended: true}));
- forgot to await in bcrypt.compare(inputPassword, hashedPassword);
- whilst testing signout route, forgot that it was a post request not the default get.
```js
const postSchema = mongoose.Schema({ userId: {
        type:mongoose.Schema.Types.ObjectId,
```
# 2 hour yt complete backend project

### - npm init -y
## npm i
> express
> bcrypt
> cors
> cookie-parser
> helmet - for some sql injection prevention
> joi - for user data validation
> jwt
> morgan
> mongoose
> nodemailer

## `package.json`
```json
"scripts": {
    "start": "node --env-file=.env index.js",
    "dev": "node --env-file=.env --watch --trace-warnings index.js"
}
```
- this removes the need for nodemon and dotenv

> npm run dev

## folder structure
- controllers
- middlewares
- models
- routers
- utils
- .gitignore

## index.js
```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use(helmet());

// isolate
const fs = require('fs');
const path = require('path');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

// Use Morgan with file logging
app.use(morgan('combined', { stream: accessLogStream }));


mongoose.connect(process.env.Mongo_uri).then(() => console.log('connected.')).catch((err) => console.error('Error connecting to mongodb',err));
```

## models
### > userModel.js 
### > postModel.js 
- this has a userId reference key in the schema

## auth router
redirect to
## auth controller
- in the signup before storing the user details in the db we should validte them so create a middleware called validator.js

- inside signin, when we fetch the user document using `User.findOne({email}).select('+password');` we should note that:
    - {email} is shorthand for {email:email}
    - '+password' is used to select fields which are by default set select:false in the user model.

- note that in the jwtChecker middle ware we dont use res.send() or res.json() at the end since we call next, if there is an error, we simply throw it and catch and log it.
- `jwt.verify(jwtToken, secret)` returns the payload that was encoded.