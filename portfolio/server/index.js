import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts', postRoutes);
app.use(bodyParser.json({limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true }));
app.use(cors());

//https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
const CONNECTION_URL = "mongodb+srv://nburd01:yt01aXuNGBHJJDiE@portfolio.7bqg8wm.mongodb.net/?retryWrites=true&w=majority";


const PORT = process.env.PORT || 5000;

app.get("/posts", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});

// mongoose.set('useFindAndModify', false);