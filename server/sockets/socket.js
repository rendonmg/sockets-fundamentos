const { io } = require('../server');
//para saber si un usuario se conecta al server
io.on('connection', (client) => {
    //client contiene toda la información de la máquina que se conecta
    console.log('usuario conectado');

    //enviar un mensaje al usuario, una vez se conecta
    client.emit('enviarMsg', {
        usuario: 'Admin',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    //escuchar el cliente (emit)
    client.on('enviarMensaje', (data, callback) => { //el callback es el que viene como argumento en el index.html, tercer argumento del emit

        console.log(data);

        //enviar mensaje 
        client.emit('enviarMsg', {
            usuario: data.usuario,
            mensaje: data.mensaje
        });

        //enviar mensaje a todos los usuarios
        client.broadcast.emit('enviarMsg', data);

        // if (data.usuario) {
        //     callback({
        //         resp: 'Todo salió bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo salió mal'
        //     });
        // }

    });
});