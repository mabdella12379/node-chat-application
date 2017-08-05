const path = require('path');
const publicPath = path.join(__dirname, '/../public');
// console.log(__dirname + '/../public');
// console.log(publicPath);
const express = require('express');
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');

var app = express();
var server = http.createServer(app); 
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected');

    // socket.emit('newEmail', {
    //     from: 'mike@example.com',
    //     text: 'Hey, What is going on',
    //     createAt: 123
    // });

    // socket.on('createEmail', (email) => {
    //     console.log('createEmail', email)
    // });
    socket.emit('newMessage', {
        from: 'todd',
        text: 'Can you call me later?',
        createdAt: 999
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    })
    
    socket.on('disconnect', () => {
        console.log('User was disconnected');
    });
});

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
});