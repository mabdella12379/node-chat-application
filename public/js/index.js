var socket = io();

socket.on('connect', function() {
    console.log('Connected to server');
});

// socket.emit('createEmail', {
//     to: 'jen@example.com',
//     text: 'Hey. This is Andrew'
// });

// socket.on('newEmail', function(email) {
//     console.log('New e-mail', email);
// });

socket.on('newMessage', function(message) {
    console.log('New message', message)
});

socket.emit('createMessage', {
    from: 'kevin',
    text: 'sure, I will'
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

