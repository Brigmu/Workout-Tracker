const express = require("express");
const mongoose = require("mongoose");
// const mongojs = require('mongojs');

// const databaseUrl = "workout";
// const collections = ["workous"];

// const db = require('./models');

// db.Workout.findOne({})
// .then(result => {
//     console.log(result);
// })

const PORT = process.env.PORT || 3000;

// const User = require("./userModel.js");
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

require('./routes/htmlroutes')(app);
require('./routes/APIroutes')(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
