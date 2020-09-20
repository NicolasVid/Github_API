import React from 'react';
import PropTypes from 'prop-types';

import './message.scss';

const Message = ({ count }) => (
  <div className="message">
    <p>La recherche a donné {count} résultats</p>
  </div>
);

Message.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Message;
