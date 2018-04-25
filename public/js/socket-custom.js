var socket = io();
//.on : escuchar informacion
socket.on('connect', function() {
	console.log('Conectado al servidor IO');
});

//.on : escuchar informacion
socket.on('disconnect', function() {
	console.log('Perdimos conexion al servidor IO');
});

//.emit : Enviar informacion
socket.emit(
	'enviarMensaje',
	{
		usuario: 'christopher',
		mensaje: 'Hola mundo'
	},
	function(resp) {
		console.log('respuesta server: ', resp);
	}
);

socket.on('enviarMensaje', function(data) {
	console.log('Servidor', data);
});
