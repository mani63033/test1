const express = require('express');

const userRouter = express.Router();
const controller = require('../controllers/userControllers');


userRouter.post('/', (req, res) => {
    controller.loginUser(req, res);
});

module.exports = userRouter;