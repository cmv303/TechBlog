//this renders pages: FRONT END
module.exports = {
// GET home page
get: (req, res) => {
    res.render('all', { title: 'The Code Blog'});
},
post: (req, res) => {
    let emailAddress = req.body.emailInput;
    res.render('all', {title: 'The Code Blog', email:emailAddress});
}
};