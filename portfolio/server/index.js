
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

//express middleware that uses all the routes => starting path => localhost5000/posts
app.use('/', postRoutes);
app.use(bodyParser.json({limit:"30mb", extended:true }));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true }));
app.use(cors());

//https://www.mongodb.com/cloud/atlas

// const CONNECTION_URL = process.env.MONGO_CONNECTION_URL;



const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

//if using this get only and calling API in client => functions
//localhost:3000/posts functions with /posts below + localhost5000/ called in api
app.get("/posts", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

// mongoose.set('useFindAndModify', false);