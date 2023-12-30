const { Router } = require('express');

const booksController = require("../controllers/Books.controller");

const route = new Router();

route.get('/books', booksController.getAll)

route.delete('/books/:id', booksController.remove);

route.get('/books/:id', booksController.getById);

route.post('/books/', booksController.create);

route.put('/books/:id', booksController.update);

route.delete('/books/:id', booksController.remove);

module.exports = route;
