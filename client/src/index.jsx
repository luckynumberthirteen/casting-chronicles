import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import EntryForm from './entryForm.jsx';
import DisplayEntries from './displayEntries.jsx'
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

const App = () => {
  const [show, setShow] = useState(false);
  const [entries, setEntries] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    axios.get('/api/entries').then((res) => {
      setEntries(res.data);
    })
  }, []);

  return(
    <Container className="main" style={{fontFamily: "'Dosis', sans-serif"}, {background: 'rgba(146, 146, 146, 0.5)'}}>
      <h1>Casting Chronicles</h1>
      <Button variant="dark" onClick={handleShow}>
        New Entry
      </Button>
      <Modal show={show} onHide={handleClose} centered>
        <EntryForm setShow={setShow} data-bs-theme="dark" />
      </Modal>
      <DisplayEntries entries={entries} />
    </Container>
  )
}
const root= ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);