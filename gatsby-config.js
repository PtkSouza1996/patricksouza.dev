module.exports = {
  siteMetadata: {
    title: `Patrick Souza`,
    description: `Website com meu blog e meu curriculum`,
    author: `@PatrickSouza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Patrick Souza`,
        short_name: `Patrick`,
        start_url: `/`,
        background_color: `#141e30`,
        theme_color: `#141e30`,
        display: `minimal-ui`,
        icon: `src/images/photo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};