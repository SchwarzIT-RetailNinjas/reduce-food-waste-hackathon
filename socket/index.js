const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("A new client is connected");

    socket.on("subscribe", (channelId) => {
        socket.to(channelId);
    });

    socket.on("unsubscribe", (channelId) => {
        socket.leave(channelId);
    })
});

const { createClient } = require('redis');
//Redis client listen to all channels
const redisSubscriber = createClient({
    url: 'redis://redis:6379'
});

(async () => {
    await redisSubscriber.connect();

    await redisSubscriber.pSubscribe('*', (message, channelId) => {
        io.to(channelId).emit(message);
    });
 })();

httpServer.listen(3000);