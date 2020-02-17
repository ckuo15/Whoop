const express = require('express');
const router = express.Router();
const Review = require('../../models/Review');
const validateReviewInput = require('../../validation/reviews');

router.get('/', (req,res) => {
    Review.find()
        .then(reviews => res.json(reviews))
        .catch(err => res.status(404).json({ noreviewsfound: 'No reviews found'}))
});

router.post('/', (res, req) => {
    const { errors, isValid } = validateReviewInput(req.body.body);

    if (!isValid){
        return res.status(400).json(errors);
    }
    const newReview = new Review({
        author: req.body.author,
        body: req.body.body,
        business: req.body.business
    })

    newReview.save().then(review => res.json(review)).catch(err => res.status(422).json(err));
});

module.exports = router;