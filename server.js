require("dotenv").config();
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require('cors');
const routes = require("./server/routes/api/"); // or add profile? 
const Mongoose = require('mongoose');

const uri = process.env.MONGODB_URI //|| "mongodb:localhost/webvr-wall";

Mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("==> mongoDB Atlas connected");

        app.use(cors());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());

        app.use("/api", routes); // use("/api", routes) ? 

        const PORT = process.env.PORT || 3001;

        if (process.env.NODE_ENV === 'production') {
            app.use(express.static(__dirname + "/client/build"));
            app.get('*', (req, res) => {
                res.sendFile(__dirname + "/client/build/index.html");
            });
        }

        app.listen(PORT, function () {
            console.log(`🌎  ==> API server listening on PORT ${PORT}!`);
        });

    })
    .catch(err => console.log(err));