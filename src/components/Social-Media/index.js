import React from 'react';
import './styles.css';
import contacts from '../../data/contacts';

export default function SocialMedia() {
  return (
    <ul className="social-media">
      {contacts.map(({ url, icon: Icon }, index) => (
        <li key={index}>
          <a href={url} rel="noopener noreferrer" target="_blank">
            <Icon />
          </a>
        </li>
      ))}
    </ul>
  );
}
