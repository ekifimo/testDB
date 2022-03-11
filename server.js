const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`)
});

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./config/db');

// routes
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.get('/', async (req, res) => {
    res.send({ meesage: `Server is running on port: ${PORT}` });
});

app.use('/auth', authRoutes);


app.listen(PORT, () => {
    console.log('berhasil terhubung ke database');
});