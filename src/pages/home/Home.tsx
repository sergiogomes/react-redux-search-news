import React from "react";
import { Jumbotron } from "react-bootstrap";

const Home = () => {
  return (
    <Jumbotron>
      <h1 className="display-4">Home Page</h1>
      <p className="lead">Get breaking news headlines, and search for articles from news sources and blogs all over the web with our news API</p>
      <hr className="my-4" />
      <p>React Search News is a simple and easy-to-use app that consumes News API for headlines and articles live all over the web right now.</p>
    </Jumbotron>
  )
}

export default Home;
