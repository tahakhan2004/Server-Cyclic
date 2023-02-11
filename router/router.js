const express = require("express");
const authController = require("../Controller/controller");
// const authController = require("../Controller/controller");
const routerr = express.Router()
const middlewares = require("../Middleware");


routerr.post("/signup", authController.signup)
routerr.post("/login", authController.login)
routerr.post("/tokenmidd",  middlewares.authMiddleware ,authController.tokennn)
routerr.post("/addtocart", authController.addtocart)
routerr.get("/getCartData", authController.getCartData)



module.exports = routerr
