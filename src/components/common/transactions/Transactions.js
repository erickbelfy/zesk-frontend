import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Transaction from './Transaction';

class Transsations extends Component {
  static propTypes = {
    transactions: Proptypes.array.isRequired,
    card: Proptypes.object.isRequired,
  };

  listTransactions() {
    return this.props.transactions.map(t => <Transaction transaction={t} />);
  }

  render() {
    return (
        <div className="transaction">
          {this.listTransactions()}
        </div>
    );
  }
}

export default Transsations;
