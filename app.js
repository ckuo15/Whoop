const express = require("express");
const app = express();
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require("./routes/api/users");
const businesses = require("./routes/api/businesses");
const categories = require("./routes/api/categories");
const uploads = require("./routes/api/uploads"); // Requires AWS uploads file we made
const reviews = require("./routes/api/reviews");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/businesses", businesses);
app.use("/api/categories", categories);
app.use("/api/uploads", uploads); // Connect express to our AWS route'
app.use("/api/reviews", reviews);

if (process.env.NODE_ENV === 'production'){
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}

app.use("/static", express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));