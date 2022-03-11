const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');
const mongoose = require('mongoose');

require('dotenv').config();

app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.CONNECT_STRING)
    .then( () => {
        console.log('Conectado com Base de Dados !');
        app.emit('terminei');
    }).catch((e) => console.log(e));    

app.use(routes);

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.on('terminei', () => {
    app.listen(3000, () => {
        console.log('Servidor Iniciado com Sucesso !');
        console.log('Acesse em: http://localhost:3000/');
    })
})  

