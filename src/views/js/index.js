const socket = io();



socket.on('Welcomen', (data) =>{
    //console.log(data);
    const p = document.getElementById('text');
    p.textContent =data;
})


const btn = document.querySelector('#btn-server');
btn.addEventListener('click',()=>{
    socket.emit('server', 'Hola servidor 💻');
})


socket.on('everyone', message =>{
    console.log(message);
})