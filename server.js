const express = require('express');
const dotenv = require('dotenv');
const cors= require('cors');
const connDB = require('./config/connDB');
const router = require('./routers/authRoutes');
const messageRouter = require('./routers/messageRoutes');
const feedbackRouter = require('./routers/feedbackRoutes');

dotenv.config();

const app = express();
connDB();

app.use(cors({
    origin: "https://www.humotionai.com", // Exact frontend domain
    credentials: true
}))
app.use(express.json());

app.use('/api',router)
app.use('/api',messageRouter)
app.use('/api',feedbackRouter)


app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Sever is running on port ${process.env.PORT}`);
})
