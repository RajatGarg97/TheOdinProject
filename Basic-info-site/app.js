const http = require('http');
const fs = require('fs');

var server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile('./views/index.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (req.url === '/contact-me') {
		fs.readFile('./views/contact-me.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else if (req.url === '/about') {
		fs.readFile('./views/about.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	} else {
		fs.readFile('./views/404.html', (err, data) => {
			if (err) throw err;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			res.end();
		});
	}
});

server.listen(8080);