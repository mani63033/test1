const User = require('../models/users');

async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        res.render('home', {
            users: users
        });
    } catch (err) {
        console.error('Error in getAllUsers controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json(user);
    } catch (err) {
        console.error('Error in getUserById controller:', err);
        res.status(500).send('Internal server error');
    }
}

async function postUser(req, res) {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error creating user');
    }
}


async function updateUser(req, res) {
    try {
        const { id } = req.params;
        const userData = req.body;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await User.findByIdAndUpdate(id, userData);
        res.status(200).send('User updated successfully');
    } catch (err) {
        console.error('Error in updateUser controller:', err);
        res.status(500).send('Internal server error');
    }
}


async function deleteUser(req, res) {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await User.findByIdAndDelete(id);
        res.status(200).send('User deleted successfully');
    }
    catch (err) {
        console.error('Error in deleteUser controller:', err);
        res.status(500).send('Internal server error');
    }
}

module.exports = {
    getAllUsers
    , getUserById
    , postUser
    , updateUser
    , deleteUser

};

