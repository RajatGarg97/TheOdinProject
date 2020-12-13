const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const hostname = "127.0.0.1";

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/contact-me.html'));
});

app.all('/:id', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/404.html'));
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});