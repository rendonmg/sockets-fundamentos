const express = require('express');
const socketIO = require('socket.io');
const http = require('http'); //para poder trabajar con socket, express monta un http de estos por detrás
const path = require('path');

const app = express();
let server = http.createServer(app); //al incluir el app se monta el servidor con toda la configuración del express

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializar socket
//IO = comunicación del backend - con esto sabemos que tenemos comunicación con el server
module.exports.io = socketIO(server);
require('./sockets/socket');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});