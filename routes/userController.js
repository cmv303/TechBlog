//handles user CRUD

module.exports = {

get: (req, res, next) => {
    res.send("user: ")
},

//* look at activity 16, under api > user-router. 
//?HOW DO I DO MULTIPLE POSTS UNDER THIS WITHOUT GETTING INTO LOGIC (OR WHERE WOULD I SEPARATE OUT LOGIC)
//*EX from activity 16. CREATE new user:
// router.post('/', async (req, res) => {
//     try {
//       const dbUserData = await User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password,
//       });
post: (req, res) => {
    let id = req.params.id;
    res.post("posting: ")

    if (id === )
} else {

};
}

