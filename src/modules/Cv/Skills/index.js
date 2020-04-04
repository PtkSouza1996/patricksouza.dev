import React from 'react';
import './styles.css';
import { hard, soft } from '../../../data/skills';
import Tag from '../../../components/Tag';

export default function Skills() {
  return (
    <div className="container-skills">
      <section>
        <h4>Soft Skills</h4>
        <div className="list-skills">
          {soft.map((skill) => (
            <Tag key={skill.skillText} type={skill.top ? 'dark' : 'light'}>
              {skill.skillText}
            </Tag>
          ))}
        </div>
      </section>

      <section>
        <h4>Hard Skills</h4>
        <div className="list-skills">
          {hard.map((skill) => (
            <Tag key={skill.skillText} type={skill.top ? 'dark' : 'light'}>
              {skill.skillText}
            </Tag>
          ))}
        </div>
      </section>
    </div>
  );
}
