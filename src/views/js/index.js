const socket = io();


function checkSocketStatus(){
    console.log(`Estado del socket ${socket.connected}`);
}

socket.on("connect_error", () => {
    console.log('The socket can not connect❌:');
  });

socket.on('connect', () =>{
    console.log('The socket been connected:', socket.id);
    checkSocketStatus();
});

socket.on('disconnect', () =>{
    console.log('The socket been disconnected:', socket.id);
    checkSocketStatus();
});

socket.io.on("reconnect_attempt", () => {
    console.log('The socket be try connect 🕣:');
});

socket.io.on("reconnect", () => {
    console.log('I been  connect ✅:');
  });
  