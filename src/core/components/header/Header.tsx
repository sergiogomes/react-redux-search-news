import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'

import { selectSearchedText, changeText } from './headerSlice';
// import styles from './Header.module.css';

const Header = () => {
  const searchText = useSelector(selectSearchedText);
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log('clicked.');
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React News</Navbar.Brand>
      <Form inline>
        <FormControl type="text" value={searchText}
          placeholder="Search" className="mr-sm-2"
          onChange={e => dispatch(changeText(e.target.value))} />
        <Button variant="outline-success"
          onClick={handleClick}>Search</Button>
      </Form>
    </Navbar>
  );
}

export default Header;
