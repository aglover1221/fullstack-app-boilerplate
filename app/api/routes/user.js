const express = require("express");
const Router = express.Router();
const authenticate = require("../auth/jwtAuth");
const userAuthController = require("../controllers/user/userAuthController");

Router.get("/test", userAuthController.test);
/**
@param -  json web token with containing user payload
@return - new json web token or error if failed
*/
Router.get("/get", authenticate, userAuthController.getAuthenticatedUser);
/**
@param -  email, name, password, confirm
@return - new json web token, user, and authentication status or error if failed
*/
Router.post("/create", userAuthController.create);
/**
@param -  email, confirm
@return - new json web token, user, and authentication status or error if failed
*/
Router.post("/authenticate", userAuthController.authenticate);
/**
@param -  json web token containing email and name
@return - success status if user found else returns error
*/
Router.put("/confirm-email", userAuthController.confirmEmail);
/**
@param -  email
@return - success status if user found and sends email with link else returns error
*/
Router.post("/recover-password", userAuthController.sendPasswordLink);
/**
@param -  password, confirm
@return - success status if valid passwords else returns error
*/
Router.put("/reset-password", userAuthController.resetPassword);

module.exports = Router;
