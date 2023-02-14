const express = require('express');
const path = require('path');
const { createServer } = require('http');
const { Server } = require('socket.io');

const port = 3030;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

app.use(express.static(path.join(__dirname, '/views')));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/views/index.html');
});

const teachers = io.of("teachers");  //namespace 
const studenst = io.of("students");

teachers.on('connection', socket =>{
    console.log(socket.id + "Se ha conectado a una sala de profesores");

    //cachamos el evento que nos manda el front y emitimos la data por el evento message
    socket.on('send message', data =>{
        teachers.emit('message',data);
    });

});

studenst.on('connection', socket =>{
    console.log(socket.id + "Se ha conectado a una sala de estudiantes");

    //cachamos el evento que nos manda el front y emitimos la data por el evento message
    socket.on('send message', data =>{
        studenst.emit('message',data);
    });
    
});

httpServer.listen(port, () => console.log(`Listening on: http://localhost:${port}`));