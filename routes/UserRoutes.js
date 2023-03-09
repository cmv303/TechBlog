//file responsible for routing user commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const controllerU = require ('./userController');

router.get('/:id', controllerU.get);
router.post('/', controllerU.post);

module.exports = router;