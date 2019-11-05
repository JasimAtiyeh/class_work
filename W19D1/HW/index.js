const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const expressGraphQL = require('express-graphql');
const User = require("./models/user");
const Post = require("./models/post");
const schema = require("./schema/schema");

// app.get("/", (req, res) => res.send("Hello Nijim"));
app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);
app.listen(5000, () => console.log('Server is running on port 5000'));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));