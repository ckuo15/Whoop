module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY,
    awsAccessID: process.env.AWS_ACCESS_ID, // AWS Access Key for bucket
    awsSecretKey: process.env.AWS_SECRET_KEY, // AWS Secret Access Key for bucket
    awsBucketName: process.env.AWS_BUCKET_NAME // AWS bucket name to upload to
}