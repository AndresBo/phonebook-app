# Phonebook app

[Live here](https://express-phonebook-backend.onrender.com)

To try as admin: 

username: ```andres```
password: ```password```

Try as a regular user:

username: ```mario```
password: ```password```

Backend [here](https://github.com/AndresBo/express-phonebook-backend/tree/main)

## Yet to do:
- Test frontend
- End to end testing
- Frontend styling 

## Features:
- Filter numbers for easy search.
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
- ```React```: a user interface library for building UI components. 
- ```Axios```: a promise based HTTP client for node.js and the browser. Used to make requests from the frontend to the backend.
- ```Bootstrap```: a frontend library with templates to add styling/functionality to web pages.
- ```Jest```: a javascript testing framework.
### On the backend:
- ```bcrypt```: a password-hashing function used to encrypt users passwords.
- ```CORS```: 'cross-origin-resource-sharing' allows the backend to accept requests from a server in a different origin -like the front end.
- ```dotenv```: loads enviromental variables from .env and makes them accessible on 'process.env'.
- ```ExpressJS```: used to build the API that handlers server side tasks.
- ```Jason web token```: used to securely transmit user information between the browser, the frontend and the backend.
- ```Jest```: a javascript testing framework.
- ```Morgan```: an HTTP request logger middleware for nodejs.
- ```Mongoose```: Object Data Modeling (ODM) libraby for MongoDB. It manages relationships between data and the representation of such data as objects in the code.
- ```Mongoose unique validator```: Mongoose lacks unique validator - Mongoose-unique-validator adds pre-save validation for unique fields in a mongoose schema.
- ```Nodemon```: automatically restart application the app when file changes.
- ```Supertest```: used during testing to make HTTP requests to backend.
- ```Eslint```: identifies problems like syntax errors, style violations and bugs in our javascript code.
  
## Deployment
- The production build of the frontend is copied to the root of the backend repository.
- The backend is configured to show the frontend main page: *build/index.html*. This is achived by using express middleware [static](https://expressjs.com/en/starter/static-files.html) as ```app.use(express.static('build'))```.




