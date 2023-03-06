//dependencies
const path = require('path');
const express = require('express');
const exhandlebars= require('express-handlebars');
const handlebars = exhandlebars.create({});

//iniitializes express app
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');

// Set up sessions
const sess = {
    secret: 'Super secret secret',
    cookie: {
        // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
        httpOnly: true,
        // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
        secure: false,
        // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: 'strict',
    },
    resave: false,
    saveUninitialized: true,
    store: new
    SequelizeStore({
        db: sequelize,
    })
  };

//set Handlebars as the default template engine
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));
app.use(require('./controllers/UserRoutes'));


//starts the server to begin listening
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });