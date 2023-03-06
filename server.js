const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

const userRoute = require('./api/routes/User')
app.use('/user', userRoute)

app.listen(PORT, console.log("Server has started for port: " + PORT));