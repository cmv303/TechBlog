//dependencies
const router = require("express").Router();

//import necessary routes
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

// USE the apiRoutes middleware for all /api routes
// USE the homeRoutes middleware for root path route
// USE the dashboardRoutes middleware for all /dashboard routes

router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

//export module
module.exports = router;
