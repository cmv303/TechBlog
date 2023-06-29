# Tech Blog

This is a simple blog format web application that has the capacity to create, edit, and delete your own posts, while also allowing you to comment on the posts of others.

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
<img width="832" alt="Screenshot 2023-04-07 at 7 08 05 PM" src="https://user-images.githubusercontent.com/115678318/230691243-41544f66-51b5-4d31-b5d1-1ebb97b32440.png">
<img width="1409" alt="Screenshot 2023-04-07 at 7 08 26 PM" src="https://user-images.githubusercontent.com/115678318/230691248-5f3a849d-b74d-42b9-9c5d-b3208dfa9eea.png">
<img width="1414" alt="Screenshot 2023-04-07 at 7 09 07 PM" src="https://user-images.githubusercontent.com/115678318/230691249-c89e3137-5965-4622-8e7a-ec57d70f859e.png">
<img width="1407" alt="Screenshot 2023-04-07 at 7 08 12 PM" src="https://user-images.githubusercontent.com/115678318/230691246-ac739284-a7ab-458a-90a0-b5fb677aedbf.png">


## Deployment

To see deployed site, click here:

https://tech-blog1.herokuapp.com/

## License

Please refer to license in Repo.
