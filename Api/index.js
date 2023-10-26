const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose") ;
const passport = require("passport");
const localStrategy = require("passport-local").Strategy

const app = express();
const port = 8000;
const cors = require("cors");
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
const jwt = require("jsonwebtoken");

mongoose.connect(
    "mongodb+srv://ablodiallo:abdoulaye@cluster0.6o3dlgj.mongodb.net/",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Connecté à la base de données Mongo");
      })
      .catch((err) => {
        console.log("Erreur de connexion à MongoDb", err);
    });
    
    app.listen(port, () => {
      console.log("Serveur fonctionnant sur le port 8000");
    });
    
    const User = require("./Models/user");
    const Message = require("./Models/message");
    