# Phonebook app

[Live here](https://express-phonebook-backend.onrender.com)

Backend [here](https://github.com/AndresBo/express-phonebook-backend/tree/main)

## Features:
- Filter option to quickly find person number.
- User registration and login.
- Administrators can create, read, update and delete person.
- Administrators can create and delete users.
- Regular users are limited to searching and reading customer details.

The application will be developed using *MongoDB* to create the database, *Express.js* and *Nodejs* to handle the application layer, and *React* to implement the presentation layer for the user.

## Data flow Diagram

![data flow](https://github.com/AndresBo/phonebook-app/assets/85352176/e7b6ef5e-662e-436e-a3ea-c876d52f279c)

![App Archite](https://github.com/AndresBo/phonebook-app/assets/85352176/7c173471-451f-4692-a522-fd524f1aae8d)


## Libraries
### On the frontend:
- React: a user interface library for building UI components. 
- [Axios](https://axios-http.com/docs/intro): a promise based HTTP client for node.js and the browser. Used to make requests from the frontend to the backend.

### On the backend:
- bcrypt: a password-hashing function used to encrypt users passwords.
- CORS: 'cross-origin-resource-sharing' allows the backend to accept requests from a server in a different origin -like the front end.
- dotenv: loads enviromental variables from .env and makes them accessible on 'process.env'.
- ExpressJS: used to build the API that handlers server side tasks.
- Jason web token: used to securely transmit user information between the browser, the frontend and the backend.  
