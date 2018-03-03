var websocket = new WebSocket("ws://localhost:3000");

websocket.onerror = function(error) {
	console.error('WebSocket Error ' + error);
};


websocket.onopen = function() {
	websocket.send(JSON.stringify({
		id: "connection",
		data: 'Client 2 connected'
	}));
};

websocket.onmessage = function incoming(data) {
	console.log(data);
	data = JSON.parse(data.data);
	console.log(data.name, data.price, data.valid);

	product = '<div class="productBox">Product Name: ' + data.name + '<br> Price: ' + data.price + '<br> Validity: ' + data.valid + ' Months</div>'

	$("#prodArea").append(product);
};