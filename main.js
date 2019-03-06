// Create connection to server from web browser
// Class built into browser, supported by many browsers
// let connection = new WebSocket('ws://localhost:8080');
let connection = new WebSocket('ws://aqian-websocket-demo.herokuapp.com/');

// Successfully connected to server
connection.onopen = () => {
	console.log('connected from the frontend');

	// Sending message to web socket server
	// connection.send('hello');
};

// Failure in connecting to server
connection.onerror = () => {
	console.log('failed to connected from the frontend');
};

// Whenever message comes in from server
connection.onmessage = (event) => {
	console.log('received message', event.data);

	// Append to the ul tag
	let li = document.createElement('li');
	li.innerText = event.data;
	document.querySelector('ul').append(li);
};

document.querySelector('form').addEventListener('submit', (event) => {
	// Prevent page refresh
	event.preventDefault();

	// Send message when submit form
	// Clear out the form
	let message = document.querySelector('textarea').value;
	connection.send(message);
	document.querySelector('textarea').value = '';
});