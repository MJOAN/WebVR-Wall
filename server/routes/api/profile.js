const express = require('express');
const router = express.Router();
const profileController = require("../../controllers/profileController");
const {createProfile} = require("../../controllers/profileController2")
const {getProfile} = require("../../controllers/profileController2")


// original script: router.get("/", profileController.findAll);
// matches with "/api"
// CREATE GET TO POSTMAN: matches with "/api/create
router.get("/", getProfile);
router.get("/", profileController.findAll);


// matches with "/api/:id"
router.get("/:id", profileController.findById);

// original script: router.post("/create", profileController.create);
// CREATE POST TO POSTMAN: matches with "/api/create
router.post("/create", createProfile);


// matches with "/api/remove/:id
router.put("/remove/:id", profileController.remove);


module.exports = router;