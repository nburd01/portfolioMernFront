import express from 'express';

import { createPost, getPosts, } from '../controllers/posts.js';

const router = express.Router();


router.get('/', getPosts );
router.post('/', (createPost ))

// test
//This will show on localhost:5000/posts mother route set in index.js
// extract all logic and send to controllers 
// router.get('/', (req, res) => {
//     res.send('This works in route')
// })

export default router;