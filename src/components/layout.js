import React from 'react';
import 'typeface-clear-sans';
import './layout.css';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  );
};

export default Layout;
