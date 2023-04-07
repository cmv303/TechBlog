//dependencies
const router = require("express").Router();

//import api routes
const userRoutes = require("./user-routes.js");
const postRoutes = require("./post-routes");
const commentRoutes = require("./comment-routes");

//USE api routes with their respective paths
router.use("/user", userRoutes);
router.use("/new", postRoutes);
router.use("/comment", commentRoutes);

//export module
module.exports = router;
