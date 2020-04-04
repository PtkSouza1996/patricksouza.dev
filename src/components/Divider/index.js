import React from 'react';
import './styles.css';

export default function Divider({ children }) {
  if (React.isValidElement(children)) {
    return (
      <div className="left divider" style={{ flex: 1 }}>
        {children}
      </div>
    );
  }

  return <div className="divider" />;
}
