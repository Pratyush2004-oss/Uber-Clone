import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// custom routes
import userRoute from './routes/user.route.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api/v1/user', userRoute);

export default app;
