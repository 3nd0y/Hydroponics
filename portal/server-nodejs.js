// var express = require('express');
const WebSocket = require('ws');
const path = require('path');
const PORT = process.env.PORT || 3000;
// const INDEX = path.join(__dirname, '../index.html');
const express = require('express');
const server = express()
  // .use((req, res) => res.sendFile(INDEX) )
  .get('/', function (req, res) { res.sendFile(__dirname + '/static/index.html') })
  .get('/bg.svg', function (req, res) { res.sendFile(__dirname + '/static/bg.svg') })
  .get('/icon.png', function (req, res) { res.sendFile(__dirname + '/static/icon.png') })
  .get('/style-alt.css', function (req, res) { res.sendFile(__dirname + '/static/style-alt.css') })
  .get('/script.js', function (req, res) { res.sendFile(__dirname + '/static/script.js') })
  .get('/script_ws.js', function(req, res) { res.sendFile(__dirname + '/static/script_ws.js')})
  .listen(PORT, () => console.log(`Listening on ${ PORT }\n\n`));

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
	console.log('Client connected');

  // setInterval(() => {
  //   ws.send({"Test":"Hello"});
  // }, 1000);
	
  ws.on('message', (msg) => {
		// console.log(JSON.parse(msg).name);
    console.log(msg);
	});
	ws.on('close', () => console.log('Clients disconnected'));
});

setInterval(() => {
  wss.clients.forEach((client) => {
    // client.send(new Date().toTimeString());
    client.send('["SSID_1", "SSID_2", "SSID_3"]');
  });
}, 1000);