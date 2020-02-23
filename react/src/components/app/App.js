import React, { Component } from 'react';
import {Card, Button, ListGroup} from 'react-bootstrap';
import './App.css';
import _ from 'lodash';
import '../../styles/Card.css';

export default class Dash extends Component {
	constructor(props) {
		super(props);
	}

  render() {
    return (
      <Card className="card-custom">
          <Card.Title>Hello!</Card.Title>
          <Card.Body className="card-body-custom">
            <h3>World?</h3>
          </Card.Body>
      </Card>
    );
  }
}