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

const socketsOnline = [];

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html');
});


io.on('connection',(socket) =>{

    //Guardamos todos los sockets que se unan
    socketsOnline.push(socket.id);

    //Emisión basica
    socket.emit('Welcomen', 'Ahora estas conectado ✅');
    socket.on('server', data =>{
        console.log(data);
    })

    //Emisión a todos
    io.emit('everyone', socket.id + 'Se ha conectado ');

    //Emisión a uno solo 
    socket.on('last', data =>{
        const lastSocket = socketsOnline.at(-1); //Ultimo elemento
        io.to(lastSocket).emit("saludo", data); 
    });

})

httpServer.listen(port, () => console.log(`Listening on: http://localhost:${port}`))
