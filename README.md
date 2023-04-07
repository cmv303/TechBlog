# Tech Blog

This is a simple blog format website that has the capacity to create, edit, and delete your own posts, while also allowing you to comment on the posts of others.

While the homepage will show the posts of all users, your dashboard is private to you--only your posts will be displayed.

## Features

- mySQL2
- Sequelize
- handlebars-express
- environmental variables
- moment (npm package)
- session-Sequelize

## Installation

Install dependencies with npm

```cmd-line
  npm install
```

Requires `dotenv`,
Requires `MYSQL2`,
Requires `Sequelize`,
Requires `moment.js`,
Requires `express-session`,
Requires `express-handlebars`,
Requires `Sequelize-session`,

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```cmd-line
`DB_HOST:` '127.0.0.1' || localhost (whatever works for you!)
`DB_USER =` 'root'
`DB_PASSWORD =` 'your password here'
`DB_NAME =` 'blog_db`
`SESSION_SECRET =` 'your session secret'
```

## Demo

## Deployment

To see deployed site, click here:

https://tech-blog1.herokuapp.com/

## License

Please refer to license in Repo.
