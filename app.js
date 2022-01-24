const path = require('path');
const express = require('express');



const app = express();
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/home.html')); });
app.get('/registro', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/register.html')); });
app.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/login.html')); });

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.listen(process.env.PORT || 3000, function(){
    console.log('Servidor MercadoLiebre corriendo 3000');
})
