import React from 'react';
import { Header, TopSkills, Skills } from '../modules/Cv';
import Layout from '../components/Layout';

export default function CvPage() {
  return (
    <Layout>
      <Header />
      <TopSkills />
      <Skills />
    </Layout>
  );
}
