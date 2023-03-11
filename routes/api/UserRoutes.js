//file responsible for routing user commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const {User} = require ('../../controllers');
console.log("user", User);
router.get('/:id', User.get);
router.post('/', User.post);
router.post('/signup', User.post);

module.exports = router;