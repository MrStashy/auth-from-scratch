const express = require('express');
const app = express();

const cors = require('cors');
const morgan = require('morgan');

app.disable('x-powered-by');

app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const loginRouter = require('../src/routers/login');
const registerRouter = require('../src/routers/register')

app.use('/login', loginRouter);
app.use('/register', registerRouter);

module.exports = app