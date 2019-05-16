import express from 'express';
import user from '../models/users.model';
import m from '../helpers/middlewares';

const router = express.Router();
module.exports = router;

router.post('/signup', m.checkFields, async (req, res) => {
    await user.createUser(req.body)
    .then(user => {res.status(200).json({
        message: 'New user created successfully',
        status: 200,
        data: user
    }),console.log(user)})
    .catch(err => {console.log(err);res.status(404).json({ message: err })})
});

module.exports = router;
