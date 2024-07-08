const express = require('express');
const os = require('os');
const port = 8001;
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors({
  origin: '*',
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const userRouter = require('./routes/userRoute.js');
const productRouter = require('./routes/productRoute.js');
const loginRouter = require('./routes/loginRoute.js');

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/product', productRouter);

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
