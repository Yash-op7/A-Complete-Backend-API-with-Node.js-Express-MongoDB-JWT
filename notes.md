# mistakes made:
### - it is `module.exports`
- app.use(express.urlencoded({extended: true}));
-
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
