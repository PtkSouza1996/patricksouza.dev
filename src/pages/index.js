import React from 'react';
import { Header, TopSkills, Skills, WorkExperience } from '../modules/Cv';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function CvPage() {
  return (
    <Layout>
      <SEO title="Currículo" />
      <Header />
      <TopSkills />
      <Skills />
      <WorkExperience />
    </Layout>
  );
}
