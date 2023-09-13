require("dotenv").config();
const express = require("express");
const path = require("path");
const axios = require("axios");
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes.js");

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use("/api", routes);
app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);