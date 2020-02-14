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

app.get("/", (req, res) => res.send("<iframe width='560' height='315' src='https://www.youtube.com/embed/4vaN01VLYSQ' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use("/api/users", users);
app.use("/api/businesses", businesses);
app.use("/api/categories", categories);

app.use("/static", express.static(path.join(__dirname, "public")));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));