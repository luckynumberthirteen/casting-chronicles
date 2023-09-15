db = require ('../database/db.js');
axios = require('axios');
var url = require('url');

const getStations = (req, res) => {
  db.query(`SELECT * FROM stations`)
  .then((data) => res.send(data.rows))
  .catch((err) => console.log(err));
}

const postEntries = (req, res) => {
  axios.get(`https://beta.aviationweather.gov/cgi-bin/data/metar.php?ids=${req.body.stationId}&format=decoded`)
  .then((res) => {
    req.body.weather = res.data;
    req.body.photoUrl = 'placeholder';
    req.body.userId = 'player1';
    console.log(req.body);
    db.query(`INSERT INTO entries (userId, locationName, lureType, baitColor, action, numberCaught, size, photoUrl, notes, weather)
    VALUES ('${req.body.userId}', '${req.body.locationName}', '${req.body.lureType}', '${req.body.baitColor}', '${req.body.action}', ${req.body.numberCaught}, ${req.body.size}, '${req.body.photoUrl}', '${req.body.notes}', '${req.body.weather}')`);
    res.sendStatus(201);
  })
  .catch((err) => {
    res.sendStatus(400);
    console.log(err);
  })
}
const getEntries = (req, res) => {
  db.query(`SELECT * FROM entries`)
  .then((data) => res.send(data.rows))
  .catch((err) => console.log(err));
}

module.exports = {getStations, postEntries, getEntries};