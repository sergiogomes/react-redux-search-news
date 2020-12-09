import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Form, FormControl } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { Link, Redirect } from 'react-router-dom';

import { selectSearchedText, changeText, changePage } from './headerSlice';
import styles from './Header.module.css';

const Header = () => {
  const searchText = useSelector(selectSearchedText);
  const [isSearch, setSearch] = useState(false);
  const [query, setQuery] = useState(searchText);
  const dispatch = useDispatch();

  const handleClick = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(changeText(query))
    dispatch(changePage(1))
    setSearch(true);
    setTimeout(() => setSearch(false), 0);
  };

  const renderRedirect = () => {
    if (isSearch) {
      return <Redirect to={`/search?q=${searchText}&page=1`} />;
    }
  };

  useEffect(() => {
    if (searchText !== query) setQuery(searchText);
  }, [searchText, query]);

  return (
    <Navbar bg="light" sticky="top" className={styles.justifyExpand}>
      <Navbar.Brand>
        <Link to="/">React News</Link>
      </Navbar.Brand>
      <Form inline onSubmit={e => handleClick(e)} className={styles.justifyFlexEnd}>
        <FormControl type="text" value={query}
          placeholder="Search" className="mr-sm-2"
          onChange={e => setQuery(e.target.value)} />
        <Button variant="outline-success"
          onClick={e => handleClick(e)}>Search</Button>
      </Form>
      {renderRedirect()}
    </Navbar>
  );
};

export default Header;
