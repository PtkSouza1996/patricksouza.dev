import React from 'react';
import './styles.css';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

export default function Avatar({ size = 100 }) {
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
    <Img
      fluid={data.file.childImageSharp.fluid}
      className={`avatar s-${size}`}
    />
  );
}
