import React from 'react';
import Progress from '../../../Shared/Progress';
import { skills } from './data';

const Skills: React.FC = () => {
  return (
    <div className="container flex flex-col mt-8">
      <h4 className="text-2xl text-gray-600">Minhas Habilidades</h4>
      <div className="container flex flex-row flex-wrap overflow-hidden">
        {skills.map((skill, index) => {
          return <Progress key={skill.label} {...skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
