//evento on --> Se emite varias veces
//evento once --> Se emite sola vez. Sin importar si el evento se emite varias veces.
//evento off --> Se usa para dejar de escuchar un evento, sin importar que este se siga emitiendo.

const socket = io();

const circle = document.querySelector('#circle');

function dragCircle (position){
    circle.style.top = position.top;
    circle.style.left = position.left;
}

function drag(e){
    const position ={
        top: e.clientY +"px",
        left: e.clientX +"px",
        };
    dragCircle(position);
    socket.emit('circle position', position);
}

document.addEventListener('mousedown', (e) =>{
    console.log('moviendo');
    document.addEventListener('mousemove', drag);
});

document.addEventListener('mouseup', e => {
    document.removeEventListener('mousemove', drag);
});


socket.on('move circle', position => {
    dragCircle(position);
});