import React from 'react';
import './styles.css';
import { LinkedinFilled, GithubFilled, MailFilled } from '@ant-design/icons';
export default function SocialMedia() {
  return (
    <ul className="social-media">
      <li>
        <LinkedinFilled />
      </li>
      <li>
        <GithubFilled />
      </li>
      <li>
        <MailFilled />
      </li>
    </ul>
  );
}
