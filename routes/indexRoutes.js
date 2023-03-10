//file responsible for routing commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes')

const apiRoutes = require ('./api');

router.use('/api', apiRoutes);
router.route('/').get(homeRoutes.get).post(homeRoutes.post);


module.exports = router;