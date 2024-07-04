const express = require('express');

const controller = require('../controllers/userControllers');
const user = require('../models/users');

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    controller.getAllUsers(req, res);
});

userRouter.post('/', (req, res) => {
    controller.postUser(req, res);
});

userRouter.put('/:id', (req, res) => {
    controller.updateUser(req, res);
});

userRouter.delete('/:id', (req, res) => {
    controller.deleteUser(req, res);
});
userRouter.get('/login', (req, res) => {
    controller.loginUser(req, res);
});

module.exports = userRouter;
