const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { log } = require('console');
//import * as url from 'url';

const port = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html');
});


io.on('connection',(socket) =>{
    //console.log('Clients connected: '+ io.engine.clientsCount);
    //console.log('ID del socket connected:',socket.id);
    socket.conn.once('upgrade', () =>{
        console.log('Hemos pasado de http Long-Polling a', socket.conn.transport.name);
    })
})

httpServer.listen(port, () => console.log(`Listening on: http://localhost:${port}`))
