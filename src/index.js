import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Navbar'
import { Col, Container, Row } from 'reactstrap';
import './style.css'


ReactDOM.render(
  <Fragment>
  <Container>
    <Row>
      <Col>
        <NavBar/>
      </Col>
    </Row>
  </Container>
      <App />
  </Fragment>,
  document.getElementById('root')
);