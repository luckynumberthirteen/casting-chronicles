import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const EntryForm = ( {setShow} ) => {
  const [locationName, setLocationName] = useState('');
  const [lureType, setLureType] = useState('');
  const [baitColor, setBaitColor] = useState('');
  const [action, setAction] = useState('');
  const [numberCaught, setNumberCaught] = useState(0);
  const [size, setSize] = useState(0);
  const [notes, setNotes] = useState('');
  return(
    <Container className="entryModal">
    <Form data-bs-theme="dark" className="entryForm" style={{color: "#ffb703"}} onSubmit={(e) => {
      e.preventDefault();
      if (!navigator.geolocation) {
        console.log(`can't use geolocation`);
      } else {
        navigator.geolocation.getCurrentPosition((position) => {
          axios.get('/api/stations')
          .then((res) => {
            var smallestDistance = null;
            var stationId = '';
            for (let i = 0; i < res.data.length; i++) {
              var latDif = res.data[i].latitude - position.coords.latitude;
              var longDif = res.data[i].longitude - position.coords.longitude;
              var distance = Math.sqrt((latDif ** 2) + (longDif ** 2));
              if (smallestDistance === null) {
                smallestDistance = distance;
                stationId = res.data[i].id;
              }
              if (smallestDistance > distance) {
                smallestDistance = distance;
                stationId = res.data[i].id;
              }
            }
            axios.post('/api/entries', {
              locationName: locationName,
              lureType: lureType,
              baitColor: baitColor,
              action: action,
              numberCaught: numberCaught,
              size: size,
              notes: notes,
              stationId: stationId
            });
          })
          setShow(false);
        }, (e) => console.log(e));
      }
    }}>
      <Form.Group className="mb-3" controlId="formExample">
        <Form.Label>Fishing spot</Form.Label>
        <Form.Control type="text" value={locationName} onChange={(e) => setLocationName(e.target.value)} placeholder="Enter location nickname" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type of lure</Form.Label>
        <Form.Control type="text" value={lureType} onChange={(e) => setLureType(e.target.value)} placeholder="'spinnerbait', 'jerkbait', 'texas rig', etc" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color of bait</Form.Label>
        <Form.Control type="text" value={baitColor} onChange={(e) => setBaitColor(e.target.value)} placeholder="If using live bait, enter type" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Action</Form.Label>
        <Form.Control type="text" value={action} onChange={(e) => setAction(e.target.value)} placeholder="Nothing, some nibbles, hard strikes, ..." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fish Caught</Form.Label>
        <Form.Control type="number" value={numberCaught} onChange={(e) => setNumberCaught(e.target.value)}  placeholder="No bluffing" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Size</Form.Label>
        <Form.Control type="number" value={size} onChange={(e) => setSize(e.target.value)} placeholder="Size in inches" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Upload Photo</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional notes</Form.Label>
        <Form.Control as="textarea" value={notes} onChange={(e) => setNotes(e.target.value)} rows={3} />
      </Form.Group>
      <Button variant="dark" className="submitButton" type="submit">
        Submit
      </Button>
    </Form>
  </Container>
  )
}

export default EntryForm;
