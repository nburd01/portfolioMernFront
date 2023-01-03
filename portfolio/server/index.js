
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';
import PostMessage from './models/postMessage.js';

const app = express();
dotenv.config()
//express middleware that uses all the routes => starting path => localhost5000/posts
app.use('/', postRoutes);
app.use(bodyParser.json({limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true }));
app.use(cors());


const PORT = process.env.PORT || 5000;

//---------------------------------------

async function connectPort() {
  try{
    await app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))
  } catch (err) {
    console.log(`${err} did not connect`);
  }
}
connectPort();
//---------------------------------------
async function connectDB() {
  try{
    await mongoose.connect(process.env.CONNECTION_URL)
    console.log("connected to mongodb")
  } catch (err) {
    console.error(err);
  }
}
connectDB();
//---------------------------------------
const post = new PostMessage({
  email: 'niall@test.fr',
  message: 'Yeah',
});

post.save();
console.log(post);

// Find a single blog post
// PostMessage.findOne({}, (err, post) => {
//   console.log(post);
// });
//---------------------------------------


//if using this get only and calling API in client => functions
//localhost:3000/posts functions with /posts below + localhost5000/ called in api
app.get("/posts", (req, res) => {
    res.json({ 
      message: "Hello from server!" });
  });

// mongoose.set('useFindAndModify', false);