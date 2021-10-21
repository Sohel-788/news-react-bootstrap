import React from 'react';
import { Card, Col } from 'react-bootstrap';

const News = (props) => {
    const {title,urlToImage,description}=props.nw;
    console.log(props.nw)
    return (
            <Col>
      <Card
      >
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default News;