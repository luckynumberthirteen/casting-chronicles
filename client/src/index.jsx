import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import Jumbotron from 'react-bootstrap/Jumbotron';
import axios from 'axios';

const App = () => {
  return(
  <Container className="p-3">
    <Form>
      <Form.Group className="mb-3" controlId="formExample">
        <Form.Label>Fishing spot</Form.Label>
        <Form.Control type="text" placeholder="Enter location nickname" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Type of lure</Form.Label>
        <Form.Control type="text" placeholder="'spinnerbait', 'jerkbait', 'texas rig', etc" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color of bait</Form.Label>
        <Form.Control type="text" placeholder="If using live bait, enter type" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Action</Form.Label>
        <Form.Control type="text" placeholder="Nothing, some nibbles, hard strikes, ..." />
      </Form.Group>
      <Form.Group>
        <Form.Label>Fish Caught</Form.Label>
        <Form.Control type="text" placeholder="Common name is fine" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Size</Form.Label>
        <Form.Control type="number" placeholder="Size in inches" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Upload Photo</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
      <Form.Group>
        <Form.Label>Additional notes</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
  </Container>
  )
}

const root= ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);