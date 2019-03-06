let WebSocket = require('ws');

// ws:// similar tp http://
let wss = new WebSocket.Server({ port: process.env.PORT || 8080 });

// Whenever there's a connection, run this function
wss.on('connection', (ws) => {
	ws.on('message', (message) => {

		// Server logs out received message
		console.log(`Received: ${message}`);

		// Send message back down to a single client
		// ws.send(message);

		// List of all connected clients
		wss.clients.forEach( (client) => {
			client.send(message);
		});
	});

	// setTimeout( () => {
	// 	ws.send('hello');
	// }, 2000);
});