import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import Card from '../card';

class CreditCards extends Component {
  static propTypes = {
    creditCards: Proptypes.array.isRequired,
  };

  renderCards() {
    return this.props.creditCards.map((card, idx) => <li key={idx}><Card card={card} /></li>);
  }

  render() {
      return (
          <div className="credit-cards">
            <Row>
              <Col lg={12} sm={12}>
                <ul>
                  {this.renderCards()}
                </ul>
              </Col>
            </Row>
          </div>
      );
  }
}

export default CreditCards;
