const User = require('../models/users');

// Show list of users
exports.index = async (req, res) => {
    const users = await User.find();
    res.render('index', { users });
};

// Create a new user
exports.create = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/users');
};
