import { NextApiRequest, NextApiResponse } from 'next';
import { Server } from 'socket.io';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!res.socket?.server.io) {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on('connection', (socket) => {
      console.log('User connected:', socket.id);

      socket.on('move', (data) => {
        socket.broadcast.emit('move', data);
      });

      socket.on('disconnect', () => {
        console.log('User disconnected:', socket.id);
      });
    });
  }
  res.end();
}
