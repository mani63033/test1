const express = require('express');

const controller = require('../controllers/userControllers');
const user = require('../models/users');
const authenticateToken = require('../authenticateToken');

const userRouter = express.Router();

userRouter.get('/',authenticateToken, (req, res) => {
    controller.getAllUsers(req, res);
});

userRouter.get('/:email',authenticateToken, (req, res) => {
    controller.getUser(req, res);
});

userRouter.post('/', (req, res) => {
    controller.postUser(req, res);
});

userRouter.put('/:id',authenticateToken, (req, res) => {
    controller.updateUser(req, res);
});

userRouter.delete('/:id',authenticateToken, (req, res) => {
    controller.deleteUser(req, res);
});

userRouter.get('/login', (req, res) => {
    controller.loginUser(req, res);
});

module.exports = userRouter;
