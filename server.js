const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data) {
		// Broadcast to everyone else.
		wss.clients.forEach(function each(client) {
			if (client !== ws && client.readyState === WebSocket.OPEN) {
				client.send(data);
				console.log(data);
			}
		});
	});
});