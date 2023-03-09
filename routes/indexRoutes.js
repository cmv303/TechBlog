//file responsible for routing commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const controllerI = require ('./indexController');

router.get('/', controllerI.get);
router.post('/signup', controllerI.post);

module.exports = router;