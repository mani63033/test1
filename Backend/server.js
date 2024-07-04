const express = require('express');
const port = 8001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRouter = require('./routes/userRoute.js')

app.use('/user', userRouter);

app.listen(port, () => {
    console.log('Server is running on port 8001');
});