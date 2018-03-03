var websocket = new WebSocket("ws://localhost:3000");

websocket.onerror = function(error) {
	console.error('WebSocket Error ' + error);
};


websocket.onopen = function() {
	websocket.send(JSON.stringify({
		id: "connection",
		data: 'Client 1 connected'
	}));
};

$("form").submit(function(event) {
	event.preventDefault();

	var name = $("#name").val();
	var price = $("#price").val();
	var valid = $("#validity").val();

	console.log(name, price, valid);

	websocket.send(JSON.stringify({
		id: "productInfo",
		name: name,
		price: price,
		valid: valid
	}));
});