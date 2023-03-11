//file responsible for routing user commands to the Model and View

//! How do I turn this into a res.render('all') method instead? 
const express = require ('express');
const router = express.Router();

const {user} = require ('../../controllers');
console.log('user', user);
router.get('/:id', user.get);
router.post('/', user.post);
router.post('/signup', user.post);

module.exports = router;