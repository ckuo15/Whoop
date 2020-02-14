const express = require('express');
const router = express.Router();
const Business = require('../../models/Business');

router.get('/:category_id', (req, res) => {
  Business.find({ category: req.params.category_id})
    .then(businesses => res.json(businesses))
    .catch(err => res.status(404).json({ nobusinessesfound: 'No businesses found' }))
});

module.exports = router;