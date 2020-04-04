import React from 'react';
import './styles.css';
import Divider from '../../../components/Divider';
import workExperience from '../../../data/workExperience';
import Tag from '../../../components/Tag';
import { SwapRightOutlined } from '@ant-design/icons';

export default function WorkExperience() {
  return (
    <div className="container-experiencie">
      <h4>Experiências</h4>
      <section>
        <ul>
          {workExperience.map((work) => (
            <li key={work.company.period}>
              <Divider>
                <span>{work.company.period}</span>
              </Divider>
              <div className="container-work">
                <div className="company">
                  <img
                    src={`./companies/${work.company.logo}`}
                    alt={work.company.name}
                  />
                  <span>{work.company.name}</span>
                  <Divider />
                </div>
                <div className="resume">
                  <ul className="experience">
                    {work.projects.map((experience) => (
                      <li key={experience.name}>
                        <h4>
                          <strong>{experience.name}</strong>
                        </h4>
                        <p>{experience.description}</p>
                        <ul className="achievements">
                          {experience.achievements.map((achievement) => (
                            <li key={achievement}>
                              <span>
                                <SwapRightOutlined /> {achievement}
                              </span>
                              <Divider />
                            </li>
                          ))}
                        </ul>
                        <div>
                          {experience.stack.me.map((tech) => (
                            <Tag key={tech} type="dark">
                              {tech}
                            </Tag>
                          ))}
                          {experience.stack.all.map((tech) => (
                            <Tag key={tech} type="light">
                              {tech}
                            </Tag>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
