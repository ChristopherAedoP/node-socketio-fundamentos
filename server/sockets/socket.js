const { io } = require('../server');

io.on('connection', client => {
	console.log('Usuario conectado');

	client.emit('enviarMensaje', {
		usuario: 'Admin',
		mensaje: 'Bienvenido al servidor'
	});

	client.on('disconnect', () => {
		console.log('Usuario desconectado');
	});

	//escuchar cliente
	client.on('enviarMensaje', (data, callback) => {
		console.log(data);

		client.broadcast.emit('enviarMensaje', data);
		// if (data.usuario) {
		// 	callback({
		// 		respuesta: 'TODO SALIO BIEN'
		// 	});
		// } else {
		// 	callback({
		// 		respuesta: 'TODO SALIO MAL!!!!!'
		// 	});
		// }
	});
});
