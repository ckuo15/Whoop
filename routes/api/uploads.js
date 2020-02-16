const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const multer = require("multer"); // npm package to handle files with html requests
const upload = multer(); // invoking multer
const AWS = require("aws-sdk"); // Initialize aws-sdk library installed with npm install aws-sdk
const awsAccessID = require("../../config/keys").awsAccessID; // Access the AWS access key from gitignored file
const awsSecretKey = require("../../config/keys").awsSecretKey; // Access AWS secret key from gitignored file
const bucketName = "netflix-clone-dev"; // Access the created bucket from AWS

const s3 = new AWS.S3({
  // initialize the S3 interface by passing in our keys
  accessKeyId: awsAccessID,
  secretAccessKey: awsSecretKey
});

router.post('/', upload.single('review'), (req, res) => {
  // req.file is the `review` file
  // req.body will hold the text fields, if there were any

  // Multer adds a body object and a file or files object to the request object. 
  // The body object contains the values of the text fields of the form, the file or files 
  // object contains the files uploaded via the form.

  // Grab file object from request
  const file = req.file;

  // Setting up S3 upload parameters
  const params = {
    Bucket: bucketName,
    Key: file.originalname, // File name you want to save as in S3
    Body: file.buffer
  };

   // Uploading files to the bucket
  s3.putObject(params, function(err, data) {
    if (err) console.log(err);
    console.log(`File uploaded successfully. ${data.Location}`);
  });

  // To get the object URL
  const ObjectUrl = `https://${params.Bucket}.s3.amazonaws.com/${params.Key}` 
})

module.exports = router;