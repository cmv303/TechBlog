//file responsible for routing commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const controller = require ('./userController');

router.get('/', controller.get);
router.post('/', controller.post);

module.exports = router;