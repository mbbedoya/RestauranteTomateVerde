	/* encargado de montar nuestro servidor con Node.JS*/

	/* io es una variable que va a instanciar el módulo socket.io y estará escuchando en el puerto 3000.*/
    var io = require('socket.io').listen(3000);
	
	
    io.sockets.on('connection', function (socket) {
		
		/* socket es un cliente, el cual tendrá un evento message que es un evento que se ejecuta cuando cuando el servidor recibe un mensaje del cliente:
		3 opciones básicas.
		1. io.sockets.send: este mandará el mensaje a todos los clientes.
		2. socket.broadcast.send: este mandará el mensaje a todos los clientes, excepto al que lo mandó.
		3. socket.send: este mandará el mensaje al cliente que lo mandó.*/
        socket.on('message', function (mensaje) {
			
			/* io.sockets son todos los clientes que se conectaran al servidor, y escuchará 
			el evento connection que ejecutará una función cuando un cliente se conecte al servidor. */
            io.sockets.send(mensaje);
        });
    });