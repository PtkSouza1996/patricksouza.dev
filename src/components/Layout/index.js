import React from 'react';
import '../global.css';
import './styles.css';
import Sidebar from '../Sidebar';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
}
