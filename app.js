const path = require('path');
const express = require('express');


const app = express();
app.get('/', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/home.html')); });
app.get('/registro', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/register.html')); });
app.get('/login', (req, res) => {res.sendFile(path.resolve(__dirname,'./views/login.html')); });
app.listen(3000, () => console.log('Servidor mercadoliebre corriendo 3000'));

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));




   
