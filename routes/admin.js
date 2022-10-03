const express=require("express");

const adminController=require("../controllers/admin");
const categoryController=require("../controllers/category");
const auth=require("../middleware/auth");

const routes=express.Router();

// /admin/auth POST
routes.post("/auth",adminController.auth);

// /admin/ GET
routes.get("/",adminController.index);//for login page 

// /admin/dashboard GET
routes.get("/dashboard",auth.admin_auth,adminController.dashboard);

// /admin/category GET
routes.get("/category",auth.admin_auth,categoryController.index);

// /admin/manage_category GET
routes.get("/manage_category",auth.admin_auth,categoryController.manage_category);

module.exports.routes=routes;