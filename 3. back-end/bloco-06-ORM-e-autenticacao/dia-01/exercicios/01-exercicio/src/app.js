const express = require('express');

const routeBooks = require('./routes/Books.router');

const app = express();

app.use(express.json());

app.use(routeBooks);

module.exports = app;
