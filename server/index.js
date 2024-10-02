const express =require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');

const logWriteStream = require('./utils/logWriteStream.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined', { stream: logWriteStream }));

mongoose.connect(process.env.MONGO_URI);

db = mongoose.connection;
db.once('open', () => console.log("DB connected"));
db.on('error', (err) => console.error("DB connection failed", err));



app.get('/', (req, res) => {
    res.json({message: 'welcome to the api'})
})

app.get('/users', (req, res) => {
    res.status(201).send('users route visited');
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})