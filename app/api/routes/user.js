const express = require("express");
const Router = express.Router();
const authenticate = require("../auth/jwtAuth");
const userAuthController = require("../controllers/user/userAuthController");

Router.get("/test", userAuthController.test);

Router.get("/get", authenticate, userAuthController.getAuthenticatedUser);

Router.post("/create", userAuthController.create);

Router.post("/authenticate", userAuthController.authenticate);

Router.put("/confirm-email", userAuthController.confirmEmail);

Router.post("/recover-password", userAuthController.sendPasswordLink);

Router.put("/reset-password", userAuthController.resetPassword);

module.exports = Router;
