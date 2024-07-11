const user = require('../models/users');
const bcrypt = require('bcrypt');
const session = require('express-session');
const product = require('../models/product');


function loginAdmin(req, res) {
      res.render('login',{title: "Admin Login"});
}

function logoutAdmin(req, res) {
      req.session.destroy((err) => {
            if(err) {
                  return console.log(err);
            }
            res.redirect('/login');
      });
      }

async function loginAdminPost(req, res) {
    const { username, password } = req.body;
    try {
        const userdata = await user.findOne({ email: username });
        if (userdata) {
            const passwordMatch = await bcrypt.compare(password, userdata.password);
            if (passwordMatch) {
                req.session.user = userdata;
                req.session.isAuth = true;
                if (userdata.isAdmin === 'admin') {
                    return res.redirect('/admin');
                }
                if (userdata.isAdmin === 'superadmin') {
                    return res.redirect('/superadmin');
                }
            }
        }
        console.log('Invalid username or password');
        res.redirect('/login');
    } catch (error) {      
        console.log('Invalid username or password');
        res.redirect('/login');
    }
}

async function HomeAdminPage(req, res) {
      const userName = req.session.user.name; 
      const products = await product.find({}); 
      const users = await user.find({ isAdmin: 'user' }); 
      const productCount = products.length;
      const userCount = users.length;
      res.render('admin', { name: userName, products: productCount, users: userCount });
  }

async function getProducts(req, res) {
      const products = await product.find({});
      res.render('products', { products });
  }
  
async function getUsers(req, res) {
      const users = await user.find({ isAdmin: 'user' });
      res.render('users', { users });
  }

async function getProfile(req, res) {
      const user = req.session.user;
      res.render('profile', { user });
  }

async function HomeSuperAdminPage(req, res) {
      const userName = req.session.user.name; 
      const products = await product.find({}); 
      const users = await user.find({}); 
      const productCount = products.length;
      const userCount = users.length;
      res.render('superadmin', { name: userName, products: productCount, users: userCount });
  }


async function getSuperUsers(req, res) {
      const users = await user.find({});
      res.render('users', { users });
      }



module.exports = {
      loginAdmin,
      logoutAdmin,
      loginAdminPost,
      getProducts,
      HomeAdminPage,
      getUsers,
      getSuperUsers,
      getProfile,
      HomeSuperAdminPage
}