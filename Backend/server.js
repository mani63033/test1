const express = require('express');
const os = require('os');
const hbs = require('hbs');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
// connect-mongodb-session

const port = 8001;

const app = express();

app.use(cors({
  origin: '*',
  credentials: true
}));

// Set the views directory
app.set('views', path.join(__dirname, 'views'));
// Set the view engine to hbs
app.set('view engine', 'hbs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Set up session management
app.use(session({
  secret: 'saikirNani@123', // You should store this in an environment variable
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: 'mongodb+srv://uppalapatisaikiran27:20A25B0318@scutiarts.rifwbjg.mongodb.net/?retryWrites=true&w=majority&appName=scutiarts' // Replace with your MongoDB URL
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 2 
  }
}));

const authenticateToken = require('./authenticateToken.js');

const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');
const loginRouter = require('./routes/loginRoute.js');
const adminRouter = require('./routes/adminRoute.js');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/product', authenticateToken, productRouter);
app.use('/admin', adminRouter);

// Function to get the local IP address
function getLocalIPAddress() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address;
      }
    }
  }
  return 'localhost';
}

app.listen(port, () => {
  const ipAddress = getLocalIPAddress();
  console.log(`Server is running on http://${ipAddress}:${port}`);
});
