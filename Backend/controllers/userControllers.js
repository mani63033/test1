const User = require('../models/users.js');

async function getAllUsers(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error('Error in getAllUsers controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function postUser(req, res) {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error('Error in postUser controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByIdAndUpdate(req.params.id);
        res.status(200).json(user);
    }
    catch (err) {
        console.error('Error in updateUser controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        console.error('Error in deleteUser controller:', err);
        res.status(500).send('Internal server error');
    }
}

module.exports = { 
    getAllUsers, 
    postUser, 
    updateUser, 
    deleteUser
 };