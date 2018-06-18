import React, { Component } from 'react';
import Proptypes from 'prop-types';


class Card extends Component {
  static propTypes = {
    card: Proptypes.object.isRequired,
  };

  render() {
    return (
        <div className="card">
          <span>{this.props.card.bank}</span>
          <span>{this.props.card.type}</span>
          <span>{this.props.card.limit}</span>
          <span>Every {this.props.card.satement} of a month</span>
        </div>
    );
  }
}

export default Card;
