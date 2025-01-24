import app from './app.js';
import http from 'http';
import dotenv from 'dotenv';
import dbConnection from './utils/conn.js';

const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    dbConnection();
    console.log(`Server is running on port ${PORT}`);
});