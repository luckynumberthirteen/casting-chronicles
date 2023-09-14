db = require ('../database/db.js');
var url = require('url');

const getStations = (req, res) => {
  db.query(`SELECT * FROM stations`)
  .then((data) => res.send(data.rows))
  .catch((err) => console.log(err));
}

const postEntries = (req, res) => {
  console.log(req.body);
  res.sendStatus(201);
}

module.exports = {getStations, postEntries};