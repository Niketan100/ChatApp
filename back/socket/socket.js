import { Server } from 'socket.io';
import http from 'http';
import express from 'express';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // adjust the origin as needed
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    options: {
      sameSite: 'none',
      secure: process.env.NODE_ENV === 'production'
    }
  }
});

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on('connection', (socket) => {
  console.log('New client connected');

  const userId = socket.handshake.query.userId;
  if (userId && userId !== 'undefined') {
    userSocketMap[userId] = socket.id;
    console.log(`User ${userId} connected with socket ID: ${socket.id}`);
    io.emit('getonlineusers', Object.keys(userSocketMap));
  } else {
    console.log('Invalid userId:', userId);
  }

  socket.on('disconnect', () => {
    console.log(`Client with socket ID ${socket.id} disconnected`);
    if (userId && userId !== 'undefined') {
      delete userSocketMap[userId];
      console.log(`User ${userId} disconnected`);
      io.emit('getonlineusers', Object.keys(userSocketMap));
    }
  });

  socket.on('newMessage', (message) => {
    console.log('New message received:', message);
    const receiverSocketId = getReceiverSocketId(message.receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('newMessage', message);
    }
  });
});

export { app, io, server };
