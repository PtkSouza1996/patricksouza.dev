import React, { memo } from 'react';

interface IProps {
  title?: string;
  from?: string;
  duration?: string;
  description?: string;
  techs: string[];
}
const Experience: React.FC<IProps> = ({
  title,
  from,
  duration,
  description,
  techs,
}) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-lg text-gray-600 font-bold">Eduzz</h3>
      <h4 className="text-lg text-gray-600 font-bold">{title}</h4>
      <span className="text-sm text-gray-500 mb-4">
        {from} | {duration}
      </span>
      <p className="text-base text-gray-600 mb-4">{description}</p>
      <span className="text-sm text-gray-600">
        Tecnologias que estou utilizando:
      </span>
      <ul className="flex flex-row flex-wrap my-2">
        {techs.map((skill) => (
          <li
            key={skill}
            className="flex justify-center align-middle px-4 py-2 rounded-full bg-blue-600 text-gray-50 m-1 text-xs font-bold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(Experience);
