
import Express from 'express';
const app = Express();
import userroutes from './routes/user.js';
import postroutes from './routes/post.js';
import likeroutes from './routes/like.js';
import commentroutes from './routes/comment.js';
import authroutes from './routes/auth.js';

app.use(Express.json());

app.use('/api/users', userroutes);
app.use('/api/posts', postroutes);
app.use('/api/likes', likeroutes);
app.use('/api/comments', commentroutes);
app.use('/api/auth', authroutes);


app.listen(8800, () => {
    console.log('api is running on port 8800');
    });