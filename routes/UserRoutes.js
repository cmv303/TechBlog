//file responsible for routing user commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const controller = require ('./userController');

router.get('/:id', controller.get);
router.post('/', controller.post);

module.exports = router;