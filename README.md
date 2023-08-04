# Phonebook app

[Live here](https://express-phonebook-backend.onrender.com)

Backend [here](https://github.com/AndresBo/express-phonebook-backend/tree/main)

Features:
- Filter option to quickly find customer details.
- User registration and login.
- Administrators can create, read, update and delete customer details.
- Administrators can create and delete new users.
- Regular users are limited to searching and reading customer details.

The application will be developed using *MongoDB* to create the database, *Express.js* and *Nodejs* to handle the application layer, and *React* to implement the presentation layer for the user.

## Data flow Diagram

![data flow](https://github.com/AndresBo/phonebook-app/assets/85352176/e7b6ef5e-662e-436e-a3ea-c876d52f279c)

![App Archite](https://github.com/AndresBo/phonebook-app/assets/85352176/7c173471-451f-4692-a522-fd524f1aae8d)

## 4. User Stories
- As a regular user, I want to have quick access to the customer details I need, so I can effectively contact them. 

- As a regular user, I would like to have a list of favorite contacts I frequently need, so I can have quick access to them.

- As an administrator of the application, I want to easily and safely add, delete, modify and read customer details, so the rest of the company can have access to them.

- As an administrator of the application, I want to be able to add new application users so I can grant access as required.

- As a manager, I want to safely store customer details to prevent unauthorized people from having access.

## 5. Wireframes
### Mobile Wireframes
<br>
Login Screen<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/148a4e46-cb0a-4845-b6f4-8ffbcfca868b)

<br>
<strong>Regular user</strong> home page: note how is limited to read customer details.<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/af245f17-3417-4d94-a85c-b163928da857)

<br>
<strong>Admin user</strong> home page

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/2fee7d67-7920-4d73-95c8-e160e603bdff)

<br>
<strong>Admin user</strong> add/delete user<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/018cbdd9-e534-4569-b955-f17515e8b819)<br>
<br>
### Desktop/Tablet Wireframes
<br>
Login screen<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/0b1b09c6-0484-48d3-b32a-b2848faf81a8)

<br>
<strong>Regular user</strong> home screen: only allows reading customers data<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/ff6fd568-cf02-4daf-8581-a09ceb3dc9d1)

<br>
<strong>Admin user</strong> home page: has options to add/edit/delete new customers. When the details of an existing customer is added, the app will ask the admin if it wishes to edit customer details. Also note the <strong>delete</strong></strong> button next to every customer card.<br>

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/1f54931d-b893-4cdf-aa22-d61b51dcc01a)

<br>
<strong>Admin user</strong> home page: when the <strong>add user</strong> button is clicked, fields that allow to add or delete users are displayed.<br> 

![image](https://github.com/AndresBo/phonebook-app/assets/85352176/5b667043-be1a-40bc-9b56-83f532e85445)
