import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const DisplayEntries = ({ entries }) => {
  console.log(entries);

  return(
    <Container>
      {entries.map(entry => {
        return(
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          <li>Location: {entry.locationname}</li>
          <li>Weather: <ul style={{listStyle: 'none'}}>{
          entry.weather.split('\n').map(weatherDetail => {
            return(weatherDetail ? <li>{weatherDetail}</li> : null)
          })}</ul></li>
          <li>Lure Type: {entry.luretype}</li>
          <li>Bait Color: {entry.baitcolor}</li>
          <li>Action: {entry.action}</li>
          <li>Caught {entry.numbercaught} fish.  {entry.numbercaught ? `Average size of ${entry.size}".` : null}</li>
        </ul>
        )
      })}
    </Container>
  )
}

export default DisplayEntries;