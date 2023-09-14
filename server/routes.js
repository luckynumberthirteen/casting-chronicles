const express = require("express");
const router = express.Router();
const controllers = require("./controllers.js");
const axios = require("axios");

//Stations:
router.get("/stations", controllers.getStations);

//Entries:
router.post("/entries", controllers.postEntries);

module.exports = router;