import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

export default function Tag({ children, type }) {
  return <div className={`container-tag ${type}`}>{children}</div>;
}

Tag.propTypes = {
  type: PropTypes.oneOf(['dark', 'light']),
};

Tag.defaultProps = {
  type: 'dark',
};
