import React from 'react';
import {Button, Card, Col, Container, Form, Image, Row} from 'react-bootstrap'

const DevicePage = () => {
  const device = {id: 1, name: 'Iphone 12', price: 25000, rating:5, img: 'https://akket.com/wp-content/uploads/2017/04/iPhone-SE-display-1.jpg'}
  const description = [
    {id:1 , title:'RAM', description: '5gb'},
    {id:2 , title:'CAM', description: '12px'},
    {id:3 , title:'processor', description: 'kuper'},
    {id:4 , title:'number of cors', description: '4'},
    {id:5 , title:'battery', description: '2500mAh'},
  ]

  return (
    <Container className='mt-3'>
      <Row>
      <Col md={4}>
          <Image width={300} height={300} src={device.img} />
      </Col>
      <Col md={4}>
        <Form className='d-felx felx-column align-items-center'>
          <h2> {device.name}</h2>
        </Form>
      </Col>
      <Col md={4}>
        <Card
        className='d-flex flex-column align-item-center justify-content-around'
        style={{width:300, height:300, fontSize:32, border:'5px solid lightgray'}}
        >
          <h3>Price:{device.price}</h3>
          <Button variant={'outline-dark'}>Add to cart</Button>
        </Card>
      </Col>
      </Row>
      <Row className='d-felx flex-column m-5'>
        <h1>Parameters</h1>
        {description.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}:{info.description}
          </Row>
          )}
      </Row>
      
    </Container>
  );
};

export default DevicePage;