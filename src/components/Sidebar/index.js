import React, { memo } from 'react';
import './styles.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Divider from '../Divider';
import SocialMedia from '../Social-Media';

function Sidebar() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "photo.png" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <section className="container-sidebar">
      <div className="profile">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="profile-avatar"
        />
        <h1>Patrick Souza</h1>
        <span>
          Desenvolvedor fullstack louco por boas práticas de desenvolvimento,
          arquitetura e design de código.
        </span>
      </div>
      <Divider />
      <ul className="menu">
        <li>Currículo</li>
        <li>Contato</li>
      </ul>
      <Divider />
      <SocialMedia />
    </section>
  );
}

export default memo(Sidebar);
