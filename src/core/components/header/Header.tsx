import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link, Redirect } from 'react-router-dom';

import { selectSearchedText, changeText } from './headerSlice';
// import styles from './Header.module.css';

const Header = () => {
  const [isSearch, setSearch] = useState(false);
  const searchText = useSelector(selectSearchedText);
  const dispatch = useDispatch();

  const handleClick = () => {
    setSearch(true);
    setTimeout(() => setSearch(false), 0);
  };

  const renderRedirect = () => {
    if (isSearch) {
      return <Redirect to={`/search?q=${searchText}`} />;
    }
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">React News</Link>
      </Navbar.Brand>
      <Form inline>
        <FormControl type="text" value={searchText}
          placeholder="Search" className="mr-sm-2"
          onChange={e => dispatch(changeText(e.target.value))} />
        <Button variant="outline-success"
          onClick={handleClick}>Search</Button>
      </Form>
      {renderRedirect()}
    </Navbar>
  );
}

export default Header;
