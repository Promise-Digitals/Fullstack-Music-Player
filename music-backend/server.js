import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import songRouter from './src/routes/songRouter.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';

// app config
const app = express()
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();


// Middlewares
app.use(express.json());
// connecting the frontend and backend
app.use(cors());

// initializing routes
app.use("/api/song", songRouter)

app.get('/', (req, res)=>res.send("API Working"))

app.listen(port, ()=>{
    console.log(`Server Started on ${port}`)
})