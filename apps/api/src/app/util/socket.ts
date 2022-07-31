import { Server } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';

let io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>;

export default {
  init: (httpServer) => {
    io = new Server(httpServer, {
      cors: {
        origin: '*'
      }
    });
    return io;
  },
  getIO: () => {
    if (!io) {
      throw new Error('Socket is not initialized!');
    }
    return io;
  }
};
