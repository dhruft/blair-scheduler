import React, { useState } from 'react'
import './App.css'

import { Navbar, Container, Nav, } from 'react-bootstrap';
import { Modal } from 'react-bootstrap'
import { InputGroup, Button, Form, ListGroup } from 'react-bootstrap';

import db from './firebase.js';
import { getDocs, query, collection, doc, where, updateDoc, getDoc, setDoc } from 'firebase/firestore'

import { AiFillCheckCircle } from 'react-icons/ai';

const usersRef = collection(db, "users")

const App = () => {

  const [people, setPeople] = useState([])
  const [isError, updateError] = useState(false)
  const [show, hideModal] = useState(true)
  const [currentName, changeName] = useState("");
  const [titles, changeTitles] = useState({"1": "Period 1", "2": "Period 2", "3": "Period 3", "4": "Period 4", "6": "Period 6", "7": "Period 7", "8": "Period 8", "9": "Period 9",})

  const updateFirebase = async (data, username) => {

    //check if user is already registered\
    const q = query(usersRef, where(username, "==", true));
    const querySnapshot = await getDocs(q);
    var userExists = false;

    querySnapshot.forEach((doc) => {
      userExists = true;
    });

    const newPeople = []

    if (!userExists) {
      ["1","2","3","4","6","7","8","9"].map(async (pd) => {
        const classRef = doc(db, "classes", data.sch[pd]);
        const docSnap = await getDoc(classRef);

        if (docSnap.exists()) {

          const newValue = docSnap.data().value
          newValue.push(data.name)
          await updateDoc(classRef, {
            value: newValue
          })
          newPeople.push(newValue)

        } else {

          await setDoc(doc(db, "classes", data.sch[pd]), {
            value: [data.name]
          });
          newPeople.push([data.name])

        }
      })

      const userDocRef =  doc(db, "users", "seXBtOXYlyIT8oJRq6Lq");
      await updateDoc(userDocRef, {
        [username]: true
      });

    } else {

      ["1","2","3","4","6","7","8","9"].map(async (pd) => {
        const classRef = doc(db, "classes", data.sch[pd]);
        const docSnap = await getDoc(classRef);

        const val = docSnap.data().value
        newPeople.push(val)

      })

    }
    changeName(data.name)
    changeTitles(data.titles)
    setTimeout(()=>setPeople(newPeople), 1000)
  }

  const encrypt = (secret) => {
    const nacl = require('tweetnacl')
    const utils = require('tweetnacl-util')
    const encodeBase64 = utils.encodeBase64
    // Our nonce must be a 24 bytes Buffer (or Uint8Array)
    const nonce = nacl.randomBytes(24)
    // Our secret key must be a 32 bytes Buffer (or Uint8Array)
    const encryptionKey = process.env.REACT_APP_encryptionKey
    const secretKey = Buffer.from(encryptionKey, 'utf8')
    // Make sure your data is also a Buffer of Uint8Array
    const secretData = Buffer.from(secret, 'utf8')
    const encrypted = nacl.secretbox(secretData, nonce, secretKey)
    // We can now store our encrypted result and our nonce somewhere
    const result = `${encodeBase64(nonce)}:${encodeBase64(encrypted)}`
    return result
  };

  const fetchData = async (event) => {

    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;

    const username_encrypted = encrypt(username)
    const password_encrypted = encrypt(password)

    fetch("/getData?username="+username_encrypted+"&password="+password_encrypted).then(
      res => {

        if (res.status === 500) {
          event.target.reset()
          updateError(true);
          throw "Invalid Login"
        }

        return res.json();
      }
    ).then(
      async (data) => {
        if (data.school === "Montgomery Blair High") {
          await updateFirebase(data, username)
          hideModal(false)
        } else {
          updateError(true)
        }    
      }
    )
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Montgomery Blair Scheduler </Navbar.Brand>
          
          <Nav>
            <Nav.Link>{currentName!==0 && <div>{currentName}</div>}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal
        show={show}
        size="lg"
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title style={{margin: "auto"}}>Montgomery Blair HS Scheduler Sign In <br /> <p className="label">by Dhruva Arun</p> </Modal.Title>
        </Modal.Header>
        <Modal.Body>

              <Form onSubmit={fetchData}>

                {isError && <p className="error">Invalid Username or Password!</p>}

                  <Form.Group className="mb-4">
                      <Form.Label> <b>Username</b> </Form.Label>
                      <InputGroup> 
                          <Form.Control 
                          type="username"
                          placeholder="Enter Username"
                          isInvalid={ isError } />
                          <InputGroup.Text id="basic-addon1">@mcpsmd.net</InputGroup.Text>
                      </InputGroup>
                      <br />
                      <Form.Label> <b>Password</b> </Form.Label>
                      <InputGroup> 
                          <Form.Control 
                          type="password" 
                          placeholder="Enter Password"
                          isInvalid={ isError } />
                      </InputGroup>
                          
                  </Form.Group>
                  
                  <Button className="modalSubmit" variant="primary" type="submit" size="lg" style={{width:"100%"}}>
                      Submit
                  </Button>

                  <Modal.Footer>
                    <div className="safety">
                        <div className="segment">
                          <AiFillCheckCircle className="check" size={90}/>
                          <p>All Data Encrypted</p>
                        </div>
                        <div className="segment">
                          <AiFillCheckCircle className="check" size={90}/>
                          <p>No Login Information Stored</p>
                        </div>
                    </div>
                  </Modal.Footer>

                  <footer className="footer">Compare Your Schedule with Other Blair Students! <br></br> Contact QuickMathzs#0600 on Discord to Report Bugs </footer>

              </Form>

        </Modal.Body>
      </Modal>

      <div className="periods">
        {people.length !== 0 && (
          people.map((pd, e)=> {
            return(
              <ListGroup key={pd} className="pd">
                <h4>{(e+(e>3 ? 2 : 1)).toString() + ": " + titles[(e+(e>3 ? 2 : 1)).toString()]}</h4>
                {pd.map((name) => {return(
                  <><ListGroup.Item key={pd+10}>{name}</ListGroup.Item></>)
                })}
              </ListGroup>
            )
          })
        )}
      </div>
      


    </div>
  )
}

export default App
