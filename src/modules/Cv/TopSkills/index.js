import React from 'react';
import './styles.css';
import techs from '../../../data/techs';

export default function TopSkills() {
  return (
    <div className="container-topskills">
      <h3>Minhas Tecnologias Favoritas</h3>
      <section>
        <ul>
          {Object.values(techs).map((tech) => (
            <li key={tech.name}>
              <a href={tech.website} target="_blank" rel="noopener noreferrer">
                <img src={`./tech/${tech.logo}`} alt={tech.name} />
                <span>{tech.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
