const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');

// Route list task
route.get('/', homeController.index);

// Route post new Task
route.post('/register', homeController.registraTarefa);

// Route delete task
route.get('/delete/:id', homeController.deletaTarefa);

// Route edit task
route.get('/edit/:id', homeController.editaTarefaPage);
route.post('/edit/:id', homeController.editaTarefa);

module.exports = route;

