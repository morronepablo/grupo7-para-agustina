const express = require('express');
const path = require('path');
const mainRouter = require('./routers/mainRouter');
const productsRouter = require('./routers/productsRouter');
const usersRouter = require('./routers/usersRouter');

//Iniciando Express
const app = express();

app.use(express.static('public'));


//Template ejs
app.set('views', './views');
app.set('view engine', 'ejs');



//Declarando que a partir de '/' se va a manejar desde MainRouter
app.use('/', mainRouter);

//Declarando que a partir de '/products' se va a manejar desde productsRouter
app.use('/products', productsRouter);

//Declarando que a partir de '/users' se va a manejar desde usersRouter
app.use('/users', usersRouter);


//Creando servidor express
app.listen(process.env.PORT || 3000, () => {
    console.log("Levantando un servidor con Express en ", "http://localhost:3000");
});


