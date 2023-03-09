//file responsible for routing commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const controller = require ('./indexController');

router.get('/', controller.get);
router.post('/signup', controller.post);

module.exports = router;