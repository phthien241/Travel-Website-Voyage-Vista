const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const countriesRoutes = require("./routes/countries");
const placesRoutes = require("./routes/places")
const informationRoutes = require("./routes/information")
const userRoutes = require("./routes/user");
const cors = require("cors");

const app = express();
mongoose.connect("mongodb+srv://kurrwin1:Thapdienmaiphuc241!@cluster0.uqwplwt.mongodb.net/travel?retryWrites=true&w=majority")
.then(()=>console.log("Connect to database"))
.catch(()=>console.log("Connection failed"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use("/api/countries",countriesRoutes);
  app.use("/api/continents", placesRoutes);
  app.use("/api/information", informationRoutes)
  app.use("/api/login", userRoutes)
  module.exports = app;