//    /business/businessId

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Business = require('../../models/Business');
const validateBusinessInput = require('../../validation/businesses');

const BusinessPhoto = require('../../models/BusinessPhoto');
const multer = require('multer');
const upload = multer();
const AWS = require('aws-sdk');
const awsAccessID = require("../../config/keys").awsAccessID;
const awsSecretKey = require("../../config/keys").awsSecretKey; 
const bucketName = require('../../config/keys').awsBucketName;


router.get('/', (req, res) => {
    Business.find()
        .then(businesses => res.json(businesses))
        .catch(err => res.status(404).json({ nobusinessesfound: 'No businesses found'}))
});

router.get('/:business_id', (req, res) => {
    Business.findOne({_id: req.params.business_id})
        .then(business => res.json(business))
        .catch(err => res.status(404).json({nobusinessfound: 'No business found with this id'}));
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

router.post('/:business_id/upload', upload.single('photo'), (req, res) => {
    const s3 = new AWS.S3({
        accessKeyId: awsAccessID,
        secretAccessKey: awsSecretKey
    });

    const file = req.file;
    const params = {
        Bucket: bucketName,
        Key: file.originalname,
        Body: file.buffer
    };
    s3.putObject(params, function(err, data) {
        if (err) console.log(err);
        console.log(`File uploaded successfully`);
    });
    const ObjectUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}`; 

    new BusinessPhoto({
        business: req.params.business_id,
        uploader: req.body.user_id,
        photoURL: ObjectUrl
    }).save().then(businessPhoto => res.json(businessPhoto)).catch(err => res.status(422).json(err));
});


// , passport.authenticate('jwt', { session: false }

module.exports = router;