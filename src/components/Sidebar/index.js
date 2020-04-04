import React, { memo } from 'react';
import './styles.css';

import Divider from '../Divider';
import SocialMedia from '../Social-Media';
import Avatar from '../Avatar';

function Sidebar() {
  return (
    <section className="container-sidebar">
      <div className="profile">
        <Avatar />
        <h1>Patrick Souza</h1>
        <span>
          Desenvolvedor fullstack louco por boas práticas de desenvolvimento,
          arquitetura e design de código.
        </span>
      </div>
      <Divider />
      {/* <ul className="menu">
        <li>Currículo</li>
        <li>Contato</li>
      </ul>
      <Divider /> */}
      <SocialMedia />
    </section>
  );
}

export default memo(Sidebar);
