import React from "react";
import "./MenuBar.css"
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function MenuBar() {

  return (
    <div><Navbar fixed='top' bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">MedicNet </Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/topdoctors">TopDoctors</Nav.Link>
      <Nav.Link href="/adddoctor">Add Doctor</Nav.Link>
    </Nav>
    
    </Container>
    
  </Navbar>
  </div>
  
  )
}
