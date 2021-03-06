import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

class CreditHealth extends Component {
    render() {
        return (
            <section id="credit-health">
              <Row>
                <Col lg={4} sm={3}>
                  List of credit cards
                </Col>
                <Col lg={8} sm={9}>
                  list of expenses
                </Col>
              </Row>
            </section>
        );
    }
}

export default CreditHealth;
