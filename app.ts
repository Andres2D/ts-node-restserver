import dotenv from 'dotenv';
import Server from './models/server';

// COnf dotenv
dotenv.config();

export const server = new Server();

server.listen();
