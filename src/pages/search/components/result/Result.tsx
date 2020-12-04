import React from "react";
import { Card, Col, Row } from "react-bootstrap";

import { IArticle } from "../../interfaces/IArticle";

type CardProps = {
  article: IArticle;
};

const Result = ({ article }: CardProps) => {

  return (
    <Card className="my-2">
      <Row className="no-gutters">
        <Col md={8}>
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.description}
            </Card.Text>
            <Card.Text className="mb-2 text-muted">
              {article.author}
            </Card.Text>
          </Card.Body>
        </Col>
        <Col md={4}>
          <Card.Img variant="top" src={article.urlToImage} alt={article.title} />
        </Col>
      </Row>
    </Card>
  )
}

export default Result;

