const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');
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

    console.log(socket.id);
})

httpServer.listen(port, () => console.log(`Listening on: http://localhost:${port}`))
