import React from 'react';
import './styles.css';

export default function Tag({ children, type = 'blue' }) {
  return <div className={`container-tag ${type}`}>{children}</div>;
}
