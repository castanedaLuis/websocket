//evento on --> Se emite varias veces
//evento once --> Se emite sola vez. Sin importar si el evento se emite varias veces.
//evento off --> Se usa para dejar de escuchar un evento, sin importar que este se siga emitiendo.

const socket = io();


const send = document.querySelector('#send');
const disconnect = document.querySelector('#disconnect');
const connect = document.querySelector('#connect');


send.addEventListener('click',() =>{
        socket.volatile.emit('is connected',"Esta conectado.")
    
});

disconnect.addEventListener('click',() =>{
    socket.disconnect();
});

connect.addEventListener('click',() =>{
    socket.connect();
});