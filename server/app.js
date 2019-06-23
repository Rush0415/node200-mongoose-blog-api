const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

if(process.env.ENV === 'production') {
    mongoose.connect(process.env.MONGODB_URI);
}else {
    mongoose.connect('mongodb://localhost/my-blog');
}

// mongoose.connect('mongodb://testdummy:node200@ds341837.mlab.com:41837/heroku_psksqn61',{ useNewUrlParser: true },
// (err) => {
//       if(err) {
//         return console.log(err, 'An internal server error has occured');
//       }
//     });

    mongoose.Promise = Promise;

const app = express();

app.use(bodyParser.json());
app.use('/api/users', require('./routes/users'));
app.use('/api/blogs', require('./routes/blogs'));

app.get('/', (req, res) => {
    res.status(200).send("let's go");
});

// app.use('/api/users', require('./routes/users'));

module.exports = app;

