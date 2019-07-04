var socket = io();

// Obtiene vía get el nombre de la persona
var params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location.href = "index.html";
    throw new Error('El nombre y sala son necesarios');
}
var usuario = { // <- esta variable es la que se envía al conectarse la persona
    nombre: params.get('nombre'),
    sala: params.get('sala'),
};

socket.on('connect', function() {
    console.log('Conectado al servidor');

    // Emite quién es la persona
    socket.emit('entrarChat', usuario, function(resp) { // <- la función es el callback
        console.log(resp);
    });
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});


// Enviar mensaje al grupo
// socket.emit('crearMensaje', {
//     nombre: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar mensajes
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});

// Escuchar cuando un usuario entra o sale del chat
socket.on('listaPersona', function(personas) {
    console.log(personas);
});

// Recibe mensaje privado
socket.on('mensajePrivado', function(mensaje) {
    console.log('Mensaje privado: ', mensaje);
});