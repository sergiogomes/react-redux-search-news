import React from 'react';

import { Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

// import styles from './Header.module.css';

const Header = () => {

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React News</Navbar.Brand>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
