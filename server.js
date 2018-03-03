const WebSocket = require('ws');
 
const wss = new WebSocket.Server({ port: 3000 });

console.log("Waiting for connection at port 3000...")

wss.on('connection', function connection(ws) {
	ws.on('message', function incoming(data) {
		console.log(data);
		data = JSON.parse(data);

		if (data.id == "productInfo") {
			console.log("Broadcasting data");
			// Broadcast to everyone else.
			wss.clients.forEach(function each(client) {
				if (client !== ws && client.readyState === WebSocket.OPEN) {
					client.send(JSON.stringify(data));
				}
			});
		}
	});

	ws.on('error', function(e) {
		console.log("Disconnected");
	})
});