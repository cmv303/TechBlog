//handles user CRUD

module.exports = {

get(req, res) {
    console.log("res", res)
    res.json({message: "Hello!"})
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
post(req, res){
    let id = req.params.id;
    res.json({message: "posting"})

//     if (id === )
// } else {

}
}

