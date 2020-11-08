import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Navbar'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';
import './font.css'


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