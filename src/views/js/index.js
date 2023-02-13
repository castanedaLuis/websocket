const socket = io();



socket.on('Welcomen', (data) =>{
    //console.log(data);
    const p = document.getElementById('text');
    p.textContent =data;
});


const btn = document.querySelector('#btn-server');
btn.addEventListener('click',()=>{
    socket.emit('server', 'Hola servidor 💻');
});


socket.on('saludo', message =>{
    console.log(message);
});

socket.on('everyone', message =>{
    console.log(message);
});

const btnToSaludaLast = document.querySelector('#saludaUltimo');
btnToSaludaLast.addEventListener('click',() => {
    console.log('click');
    socket.emit('last', 'Hola compañero por llegar al ultimo 👋🏻');
});

//evento on --> Se emite varias veces
//evento once --> Se emite sola vez. Sin importar si el evento se emite varias veces.
//evento off --> Se usa para dejar de escuchar un evento, sin importar que este se siga emitiendo.
socket.on('on', ()=>{
    console.log('Se emite varias veces');
});
