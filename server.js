const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const cors = require('cors');
const routes = require("./server/routes/api"); // or add profile
const Mongoose = require('mongoose');

const dotenv = require("dotenv")
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("client/build"));

app.use("/", routes);

const uri = process.env.MONGODB_URI;

Mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("==> mongoDB Atlas connected"))
    .catch(err => console.log(err)
)

const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
});