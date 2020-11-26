const { response } = require('express');
const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

//variables de entorno global => valida si aplacicion corre en un servidor web me asigne un puerto o 3000 perto de local
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales')
app.set('view engine', 'hbs');



//redirecciona a la pagina principal
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'bryan martinez',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});