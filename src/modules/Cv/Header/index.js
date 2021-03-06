import React from 'react';
import './styles.css';
import { FilePdfFilled } from '@ant-design/icons';
import Avatar from '../../../components/Avatar';

export default function Header() {
  return (
    <header className="header-container">
      {/* <div className="icon-pdf">
        <a
          href="https://patricksouza.dev/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FilePdfFilled />
        </a>
      </div> */}
      <section>
        <h1>
          <strong>Patrick Souza</strong>
          <strong>Sênior software engineer</strong>
        </h1>
        <Avatar size={70} />
        <ul className="contact">
          <li>Sorocaba, Brasil</li>
          <li>
            Linkedin:{' '}
            <a
              href="https://www.linkedin.com/in/dev-patrick-souza/"
              target="_blank"
              rel="noopener noreferrer"
            >
              dev-patrick-souza
            </a>
          </li>
          <li>
            Github:{' '}
            <a
              href="https://github.com/PtkSouza1996"
              target="_blank"
              rel="noopener noreferrer"
            >
              ptksouza1996
            </a>
          </li>
        </ul>
      </section>
    </header>
  );
}
