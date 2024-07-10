const User = require('../models/users.js');
const bcrypt = require('bcrypt');
const validate = require('../validations/commonValidations.js');
const jwt = require('jsonwebtoken');
const session = require('express-session');


async function getAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error('Error in getAllUsers controller:', err);
    res.status(500).send('Internal server error');
  }
}

async function getUser(req, res) {
  try {
    // Check if the session contains user data
    if (!req.session.user || !req.session.user.id) {
      return res.status(401).send('Unauthorized: No session available');
    }

    // Read the user ID from the session
    const userId = req.session.user.id;

    const user = await User.findOne({ _id: userId });
    if (!user) {
      return res.status(404).send('User not found');
    }

    res.status(200).json(user);
  } catch (err) {
    console.error('Error in getUser controller:', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = getUser;


async function postUser(req, res) {
  try {
    const { name, phone, email, password } = req.body;
    const emailExists = await User.findOne({ email: email });
    if (emailExists) {
      return res.status(409).json({ msg: "email already existed" });
    }
    const emailError = validate.validateEmail(email);
    if (emailError) {
      return res.status(400).json({ msg: emailError });
    }
    const passwordError = validate.validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ msg: passwordError });
    }
    const phoneError = validate.validatePhone(phone);
    if (phoneError) {
      return res.status(400).json({ msg: phoneError });
    }

    // Hash the password using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({name, phone, email, password: hashedPassword});
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    console.error('Error in postUser controller:', err);
    res.status(500).send('Internal server error');
  }
}

async function updateUser(req, res) {
  try {
    const email = req.body.email;
    const phone = req.body.phone;
    const password = req.body.password;
    const emailExists = await User.findOne({ email: email });
    if (emailExists && emailExists._id.toString() !== req.params.id) {
      return res.status(409).json({ msg: "email already exists" });
    }
    const emailError = validate.validateEmail(email);
    if (emailError) {
      return res.status(400).json({ msg: emailError });
    }
    const passwordError = validate.validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ msg: passwordError });
    }
    const phoneError = validate.validatePhone(phone);
    if (phoneError) {
      return res.status(400).json({ msg: phoneError });
    }

    // Hash the password using bcrypt
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      req.body.password = hashedPassword;
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

async function loginUser(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ msg: 'Invalid password' });
    }

    const secretKey = process.env.SECRET_KEY || 'saikirNani@123';

    const token = jwt.sign({ userId: user._id, email: user.email }, secretKey, {
      expiresIn: '2d' // expires in 2 days
    });

    // Store user data in the session
    req.session.user = {
      id: user._id,
      email: user.email,
      name: user.name
    };

    res.status(200).json({ token, user });
  } catch (err) {
    console.error('Error in login controller:', err);
    res.status(500).send('Internal server error');
  }
}

module.exports = loginUser;



module.exports = {
  getAllUsers,
  getUser,
  postUser,
  updateUser,
  deleteUser,
  loginUser
};