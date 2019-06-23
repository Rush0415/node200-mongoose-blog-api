const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/my-blog'
mongoose.connect(MONGODB_URI)

mongoose.Promise = Promise;

// mongodb:Rush0415:Dengit0415@ds341837.mlab.com:41837/heroku_psksqn61

const app = express();

app.use(bodyParser.json());
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
    res.status(200).send("let's go");
});

// app.use('/api/users', require('./routes/users'));

module.exports = app;

