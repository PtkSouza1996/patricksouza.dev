import React from 'react';
import '../global.css';
import './styles.css';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

export default function Layout({ children }) {
  return (
    <div className="container">
      <Sidebar />
      <main>
        {children}
        <Footer />
      </main>
    </div>
  );
}
