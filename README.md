* Lattice Assignment *

Overview
  This project is a Node.js application built with the Express.js framework, MongoDB as the database, and several essential packages to enhance functionality and security. The following document provides an overview of the major libraries/frameworks used, API endpoints, and instructions on accessing the database dump and schema.

Major Libraries/Frameworks Used

1. Express.js
  Purpose: Express.js is used as the web application framework for Node.js. It simplifies the process of building robust and scalable web applications.
  Installation: npm install express
  Usage: Define routes, middleware, and handle HTTP requests and responses.
2. Mongoose
  Purpose: Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It simplifies the interaction with MongoDB databases.
  Installation: npm install mongoose
  Usage: Define schemas, models, and perform database operations.
3. dotenv
  Purpose: dotenv is used to load environment variables from a .env file into process.env, facilitating a clean and organized way to manage configuration settings.
  Installation: npm install dotenv
  Usage: Store sensitive information like database URIs and secret keys securely.
4. express-validator
  Purpose: express-validator provides middleware to handle input validation and sanitation in Express.js applications.
  Installation: npm install express-validator
  Usage: Validate and sanitize user inputs in route handlers.
5. bcryptjs
  Purpose: bcryptjs is used for hashing and salting passwords, enhancing the security of user authentication.
  Installation: npm install bcryptjs
  Usage: Hash and compare passwords securely.
6. jsonwebtoken
    Purpose: jsonwebtoken is a library for creating and verifying JSON Web Tokens (JWTs), enabling secure communication between parties.
    Installation: npm install jsonwebtoken
    Usage: Implement token-based authentication and authorization.
7. cookie-parser
  Purpose: cookie-parser is middleware for parsing cookies in Express.js applications, simplifying cookie handling.
  Installation: npm install cookie-parser
  Usage: Parse and set cookies easily.


API Endpoints:-

1. Patient Register
Endpoint: POST /patientRegister
  Description: Uploads a user's avatar to MongoDB.
  Middleware: upload.single('avatar') (multer)
  Parameters:
    name, address, email, phone, password, photo (file).
  Response:
    200 OK: Patient successfully registered.
    500 Internal Server Error: Server error.
2. Psychaitrist Registration
Endpoint: POST /psychaitristRegister
  Description: Registers a new Psychaitrist.
  Parameters:name, hospitalId, email, password.
  Response:
    200 Created: User registered successfully.
    400 Bad Request: Validation error.
    500 Internal Server Error: Server error.
3. Psychaitrist Login
  Endpoint: POST /loginpsychaitristLogin
  Description: Logs in a Psychaitrist and returns a JWT.
  Middleware: bcrypt.compareSync (bcryptjs), jwt.sign (jsonwebtoken)
  Parameters:email, password. 
  Response:
    200 OK: Login successful, JWT provided.
    401 Unauthorized: Incorrect credentials.
    500 Internal Server Error: Server error.
4. Psychaitrist Logout
  Endpoint: GET /psychaitristLogout
  Description: Logout Psychaitrist.
  Parameters: cookies have access token ( a Psychaitrist should be logged in).
  Response:
    200 OK: Logout successful.
    401 Unauthorized: Incorrect credentials.
    500 Internal Server Error: Server error.
5. Hospital Report 
Endpoint: GET /getPsychaitrists/:id
  Description: Report of Hospital how many psychaitrists and patients.
  Parameters: hospitalId.
  Response:
    200 Created: Hospital report .
    400 Bad Request: id not provided.
    500 Internal Server Error: Server error.




Following are APIs End Points:-
1.  http://localhost:3000/main/v1/patientRegister
2.  http://localhost:3000/main/v1/psychaitristRegister
3.  http://localhost:3000/main/v1/psychaitristLogin
4.  http://localhost:3000/main/v1/psychaitristLogout
5.  http://localhost:3000/main/v1//getPsychaitrists/:id          
                                                     id:{ AIIMS,IGIMS,JNMCH,AH}

Postmat collection link to check APIs:-
https://elements.getpostman.com/redirect?entityId=24755307-7faaa4b7-b9a1-4c65-8de3-68a68c5c13a7&entityType=collection"# Lattice-Assignment" 
"# Lattice-Assignment" 
