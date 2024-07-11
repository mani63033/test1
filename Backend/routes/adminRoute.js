const express = require('express');
const router = express.Router();
const userController = require('../controllers/adminController');
const authenticateToken = require('../authenticateToken');
const isAuth = require('../validations/auth');



router.get('/login', userController.loginAdmin);
router.get('/logout', userController.logoutAdmin);
router.post('/loginpost', userController.loginAdminPost);
router.get('/admin',isAuth, userController.HomeAdminPage);
router.get('/superadmin',isAuth, userController.HomeSuperAdminPage);
router.get("/adminproducts",isAuth, userController.getProducts);
router.get("/allusers",isAuth, userController.getUsers);
router.get("/profile",isAuth, userController.getProfile);
router.get('/superallusers',isAuth, userController.getSuperUsers);


module.exports = router;
