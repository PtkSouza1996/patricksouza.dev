import React from 'react';
import Experience from './Experience';

const WorkExperiences: React.FC = () => {
  return (
    <div className="flex flex-col" data-aos="fade">
      <h2 className="text-2xl text-gray-600 text-decoration">Experiências</h2>
      <div className="container flex flex-col">
        <Experience
          title="Software engineer"
          from="Sorocaba, SP"
          duration="Março 2020 - Atualmente"
          description="Atualmente estou atuando diretamente na escrita de uma nova versão
            para checkout da eduzz. Estamos enfrentando muitos desafios legais
            para atender alta disponibilidade e para oferecer a melhor
            experiência do usuário."
          techs={['ReactJs', 'Rxjs', 'Typescript', 'NodeJs', 'AWS', 'CI/CD']}
        />
      </div>
    </div>
  );
};

export default WorkExperiences;
