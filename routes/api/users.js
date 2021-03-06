const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

const validateRegisterInput = require('../../validation/signup');
const validLoginInput = require('../../validation/login');

// router.get("/current",passport.authenticate("jwt", { session: false }),(req, res) => {
//     res.json({
//       id: req.user.id,
//       username: req.user.username,
//       email: req.user.email
//     });
// });

router.get('/', (req,res) => {
  console.log(req.body);
  User.find().then(users => {
    res.json(users)
  }).catch(err => res.status(404).json({ nousersfound: 'No users found' }))

});

router.post('/signup', (req, res) => {
    console.log(req.body);
    const { errors, isValid } = validateRegisterInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({email: "A user has already registered with this address"})
      } else {
        const newUser = new User({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password
        })
        
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => res.json(user)).catch(err => console.log(err));
          })
        })
      }
    })
})

router.post('/login', (req, res) => {
    const { errors, isValid } = validLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if(!user) {
            errors.email = "No matching email exists";
            return res.status(400).json(errors);
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                const payload = { id: user.id, email: user.email, username: user.username };
                
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    { expiresIn: 3600 },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                errors.password = "Incorrect email or password combination";
                return res.status(400).json(errors);
            }
        })
    })
})

module.exports = router;