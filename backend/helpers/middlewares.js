import db from '../data/users';

const mustBeInteger = (req, res, next) => {
  const id = req.params.id;
  if (!Number.isInteger(parseInt(id))) {
    res.status(404).json({ message: 'ID must be an integer' });
  } else next();
};

const checkFields = (req, res, next) => {
  const { firstName, lastName, email } = req.body;

  if (firstName && lastName && email) next();
  else {
  res.status(404).json({ 
    status: 404,
    message: 'Sorry, but you did not provide all required fields' });
  }
};

const findUserEmail = (req, res, next) => {
  const login = db.find(login => login.email === req.body.email);
  if (login) next();
  else {
    res.status(404).jsson({
      status: 404,
      message: 'Sorry, but your email could not be recognized. Are you new here?'
    });
  }
}
module.exports = {
  mustBeInteger,
  checkFields,
  findUserEmail
};