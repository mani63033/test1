const User = require('../models/users.js');

function userDataValidation(req){

    const email  = req.body.email;

    if (!email) {
        return 'Email is required';
    }
    if (typeof email !== 'string') {
        return 'Email must be a string';
    }
    if (email.length < 5 || email.length > 255) {
        return 'Email must be between 5 and 255 characters';
    }
    if (!email.includes('@') || !email.includes('.')) {
        return 'Invalid email';
    }

    const phone = req.body.phone;

    if (!phone) {
        return 'Phone is required';
    }
    if (typeof phone !== 'number') {
        return 'Phone must be a number';
    }
    if (phone.length < 10 || phone.length > 10) {
        return 'Phone must be 10 characters';
    }
    if (phone.charAt(0) !== '6' || phone.charAt(0) !== '7' || phone.charAt(0) !== '8' || phone.charAt(0) !== '9') {
        return 'invalid phone number';
    }

    const password = req.body.password;

    if (!password) {
        return 'Password is required';
    }
    if (typeof password !== 'string') {
        return 'Password must be a string';
    }
    if (password.length < 8 || password.length > 255) {
        return 'Password must be between 8 and 255 characters';
    }
    if (!password.match(/[a-z]/)) {
        return 'Password must contain at least one lowercase letter';
    }
    if (!password.match(/[A-Z]/)) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!password.match(/[0-9]/)) {
        return 'Password must contain at least one number';
    }
    if (!password.match(/[!@#$%^&*]/)) {
        return 'Password must contain at least one special character';
    }

    const name = req.body.name;
    
    if (!name) {
        return 'Name is required';
    }
    if (typeof name !== 'string') {
        return 'Name must be a string';
    }

    return null;
}

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
        const isInvalid = userDataValidation(req);
        if (isInvalid) {
            return res.status(400).json({ msg: isInvalid });
        }
        const email = req.body.email;
        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
            return res.status(409).json({ msg: "email existed" });
        }
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
        const isInvalid = userDataValidation(req);
        if (isInvalid) {
            return res.status(400).json({ msg: isInvalid });
        }
        const email = req.body.email;
        const emailExists = await User.findOne({ email: email });
        if (emailExists) {
            return res.status(409).json({ msg: "email existed" });
        }
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!user) {
            return res.status(404).send('User not found');
        }

        res.status(200).json(user);
    } catch (err) {
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