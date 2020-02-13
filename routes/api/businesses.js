//    /business/businessId

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Business = require('../../models/Business');
const validateBusinessInput = require('../../validation/businesses');


router.get('/', (req, res) => {
    Business.find()
        .then(businesses => res.json(businesses))
        .catch(err => res.status(404).json({ nobusinessesfound: 'No businesses found'}))
});


router.get('/:business_id', (req, res) => {
    Business.findOne({_id: req.params.business_id})
        .then(business => res.json(business))
        .catch(err => res.status(404).json({nobusinessfound: 'No businesses found from this user'}));
})

router.post('/',(req, res) => {
    const { errors, isValid } = validateBusinessInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }
    console.log(req.body.owner);
    const newBusiness = new Business({
        name: req.body.name,
        owner: req.body.owner,
        category: req.body.category
        //req.user.id intead of 33;
    });

    newBusiness.save().then(business => res.json(business)).catch(err => res.status(422).json(err));
});

// , passport.authenticate('jwt', { session: false }

module.exports = router;