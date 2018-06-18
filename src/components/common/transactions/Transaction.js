import React, { Component } from 'react';
import Proptypes from 'prop-types';
import {Row, Col} from 'react-bootstrap';
import './Transaction.css';

class Transsation extends Component {
  static propTypes = {
    transaction: Proptypes.object.isRequired,
  };

  render() {
    return (
        <Row className="transaction">
          <Col lg={6} sm={6}>{this.props.transaction.description}</Col>
          <Col lg={3} sm={3}>{this.props.transaction.amount}</Col>
          <Col lg={3} sm={3}>{this.props.transaction.type}</Col>
        </Row>
    );
  }
}

export default Transsation;
