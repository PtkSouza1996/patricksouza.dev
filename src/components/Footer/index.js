import React from 'react';
import './styles.css';
import { CopyrightCircleOutlined } from '@ant-design/icons';

export default function Footer() {
  return (
    <footer>
      <span>
        <CopyrightCircleOutlined /> Patrick Souza | {new Date().getFullYear()}
      </span>
    </footer>
  );
}
