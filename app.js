import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';

import db from './backend/data/users';
import signup from './backend/routes/index.routes';

const app = express();

// swagger definition
const swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Demonstrating how to describe a RESTful API with Swagger',
  },
  host: 'localhost:3000',
  basePath: '/',
};

// options for the swagger docs
var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./routes/*.js'],
};

// initialize swagger-jsdoc
var swaggerSpec = swaggerJSDoc(options);


// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/auth', signup);
//app.use('/api/v1/auth', signin);

// Sign in endpoint
app.post('/api/v1/auth/signin', (req, res) => {
  if (!req.body.email) {
    return res.status(404).send({
      status: 404,
      message: 'Email is required',
    });
  }
  if (!req.body.password) {
    return res.status(404).send({
      status: 404,
      message: 'Password is required',
    });
  }
  const data = {
    email: req.body.email,
    password: req.body.password,
  };
  if (data.email === db[0].email && data.password === db[0].password) {
  return res.status(200).send({
    status: 200,
    message: 'User signed in successfully',
    data,
    
  });
  console.log(data.email + db.email)
} else {
  return res.status(404).send({
    status: 404,
    message: 'Password or email not recognized',
  });

}
});

module.exports = app;
