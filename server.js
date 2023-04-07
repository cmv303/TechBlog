//dependencies
const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./components/helpers");
const hbs = exphbs.create({ helpers });
require("dotenv").config();

//iniitialize express app
const app = express();
const PORT = process.env.PORT || 3001;

//initalize sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

//initializes routes
const routes = require("./controllers");

// Set up sessions
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

//sets up express-handlebars
app.engine("handlebars", hbs.engine);
// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is now listening on port ${PORT}, yay: `);
  sequelize.sync({ force: false });
});
