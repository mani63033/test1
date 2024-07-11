const user = require('../models/users');
const bcrypt = require('bcrypt');
const session = require('express-session');


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


function HomeAdminPage(req, res) {
    res.render('admin',{title: "Admin Page"});
}

function HomeSuperAdminPage(req, res) {
    res.render('superadmin',{title: "Super Admin Page"});
}



module.exports = {
      loginAdmin,
      logoutAdmin,
      loginAdminPost,
      HomeAdminPage,
      HomeSuperAdminPage
}