import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import CreditCards from '../../common/credit-cards';
import CreditCardMocks from '../../../mocks/creditCards'

class CreditHealth extends Component {
  static propTypes = {
    creditCards: Proptypes.array,
    transactions: Proptypes.array,
  };

  static defaultProps = {
    ...CreditCardMocks
  };

  state = {
    isFetching: false,
  }

  render() {
      return (
          <section id="credit-health">
            <Row>
              <Col lg={4} sm={3}>
                <CreditCards creditCards={this.props.creditCards} />
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
