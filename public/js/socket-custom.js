 // Funciones que queremos que se disparen cuando recibamos información del servidor o queramos enviarle
 var socket = io(); //función que aparece por haber importado el script de socket.io, usamos var porque algunos navegadores no soportan el let

 //on: escucha sucesos
 socket.on('connect', function() {
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', function() {
     console.log('Perdimos conexión con el servidor');
 });


 //emit: envían información al servidor, string sin espacios ni caracteres especiales
 //el emit por sí solo sólo envía la información, pero en el servidor hay que configurar algo para que pueda escuchar
 //el callback (tercer argumento) nos permitirá confirmar si la acción se completó con éxito o falló
 //por ejemplo, grabar datos en una BD
 socket.emit('enviarMensaje', {
     usuario: 'Miguel',
     mensaje: 'Hola mundo'
 }, function(resp) {
     //console.log('Se disparó el callback')
     console.log('Respuesta server: ', resp);
 });

 //escuchar información desde el server
 socket.on('enviarMsg', function(mensaje) {
     console.log('Desde el server: ', mensaje);
 });