import React, { memo } from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import locale from 'date-fns/locale/pt-BR';
import Skills from './Skills';

const About: React.FC = () => {
  const startWork = new Date(2017, 1, 1);
  const workExperience = formatDistanceToNow(startWork, {
    addSuffix: true,
    includeSeconds: false,
    locale,
  });
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-gray-600 text-decoration">Sobre mim</h2>
      <p className="flex text-gray-600">
        Olá, meu nome é Patrick souza. Sou um engenheiro de software{' '}
        {workExperience}, e gosto de escrever softwares pensando em performance
        e em como o código vai ficar organizado. Gosto de experimentar
        diferentes tecnologias, e sou muito curioso sobre como as coisas
        funcionam.
      </p>
      <p className="flex text-gray-600">
        Atualmente trabalho principalmente com tecnologias como Typescript,
        ReactJs, NodeJs, Redux e Rxjs. Também tenho experiência prática em
        trabalhar com Docker, .Net core, AWS e React-Native.
      </p>
      <Skills />
    </div>
  );
};

export default memo(About);
