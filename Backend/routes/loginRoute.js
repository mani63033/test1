const express = require('express');

const userRouter = express.Router();
const controller = require('../controllers/userControllers');


userRouter.post('/',
    controller.loginUser);

module.exports = userRouter;