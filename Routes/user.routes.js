const express = require('express');
const userController = require('../user_controller')
const routes = express.Router();
const User = require('../model/user_model');
const userService = require('../userService');
const verifyToken = require('../auth');
//const upload = require('./multer');
routes.use(express.json());

routes.use(express.urlencoded());

routes.post("/anaRegister",userController.anaRegister);
routes.post("/BitzfunRegister",userController.BitzfunRegister);
routes.post("/BlockzpubRegister",userController.BlockzpubRegister);
routes.post("/anaadminRegister",userController.anaadminRegister);
routes.post("/adminRegister", userController.adminRegister);
routes.post("/adminLogin", userController.adminLogin);
routes.get("/getoneUser/:_id", verifyToken.authenticateToken,userController.getoneUser);
routes.get("/getallUser", userController.getallUser);
routes.get("/getUser", verifyToken.authenticateToken, userController.getUser);
routes.get("/deleteUser/:_id", verifyToken.authenticateToken,userController.deleteUser);

module.exports = routes;
