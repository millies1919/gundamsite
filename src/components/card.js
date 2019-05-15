import React from 'react'
import Card from 'react-bootstrap/Card'
import TextCard from 'C:/Users/matti/gundamsite/src/text/text.js'



const InfoCard = (props) => {
    return (
<Card>
  <Card.Header as="h5">{props.title}</Card.Header>
  <Card.Body>
  <Card.Text>
        <TextCard />
    </Card.Text>
  </Card.Body>
</Card>
    );
}

export default InfoCard