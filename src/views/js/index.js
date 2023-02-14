//evento on --> Se emite varias veces
//evento once --> Se emite sola vez. Sin importar si el evento se emite varias veces.
//evento off --> Se usa para dejar de escuchar un evento, sin importar que este se siga emitiendo.

//const socket = io();  ---> io() es el namespace por defecto

const user = prompt('Escribe tu usuario');
const profes = ['Raul', 'Juan DC', 'Castañeda'];

let socketNamespace, group;

const chat = document.querySelector('#chat');
const namespace = document.querySelector('#namespace');

if(profes.includes(user)){
    socketNamespace = io("/teachers");
    group = "teachers"
}else{
    socketNamespace = io("/students");
    group = "students"
}

socketNamespace.on('connect', () =>{
    namespace.textContent = group;
})

//Programando la lógica de envío de mensajes

const btnSendMessage  = document.querySelector('#sendMessage');
btnSendMessage.addEventListener('click', () =>{

    const message = prompt('¿Cúal es tu mensaje?');
    socketNamespace.emit('send message', {
        message,
        user
    })

});


socketNamespace.on('message', messageData =>{

        const { user, message } = messageData;
        const li = document.createElement('li');
        li.textContent = `${user} : ${message}`;
        chat.append(li);
});

