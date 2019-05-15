const express = require('express');
const bodyParser = require('body-parser');
const db = require('./backend/data/users');

const app = express();

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST /auth/signup
app.post('/api/v1/auth/signup', (req, res) => {
  if (!req.body.email) {
    return res.status(404).send({
      status: 404,
      message: 'Email is required',
    });
  } else if (!req.body.firstN) {
    return res.status(404).send({
      status: 404,
      message: 'First name is required',
    });
  } else if (!req.body.lastN) {
    return res.status(404).send({
      status: 404,
      message: 'Last name is required',
    });
  } 
  const data = {
        id: db.length + 1,
        email: req.body.email,
        firstN: req.body.firstN,
        lastN: req.body.lastN,
        password: 'Patie123',
      };
      db.push(data);
      return res.status(200).send({
        status: 200,
        message: 'User created successfully',
        data,
      });
});

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
    password: 'Patie123',
  };
  return res.status(200).send({
    status: 200,
    message: 'User signed in successfully',
    db,
  });
});

module.exports = app;
