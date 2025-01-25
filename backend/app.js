import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


// custom routes
import userRoute from './routes/user.route.js';
import captainRoute from './routes/captain.route.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/', (req, res) => {
    res.send('Hello World!');
})
app.use('/api/v1/user', userRoute);
app.use('/api/v1/captain', captainRoute);

export default app;
