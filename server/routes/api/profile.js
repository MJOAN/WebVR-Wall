const express = require('express');
const router = express.Router();
const profileController = require("../../controllers/profileController");
// const {createProfile} = require("../../controllers/profileController2")
// const {getProfile} = require("../../controllers/profileController2")


// matches with "/api"
// original script: router.get("/", profileController.findAll);
// CREATE GET TO POSTMAN: matches with "/api/create
// postman script: router.get("/", getProfile);
router.get("/", profileController.findAll);


// matches with "/api/:id"
router.get("/:id", profileController.findById);

// postman script: router.post("/create", createProfile);
// CREATE POST TO POSTMAN: matches with "/api/create
router.post("/create", profileController.create);

// matches with "/api/remove/:id
router.put("/remove/:id", profileController.remove);


module.exports = router;