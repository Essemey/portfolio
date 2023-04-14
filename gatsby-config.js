/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: 'Essemey | Développeur Front End',
    description: "Développeur Front End ambitieux à la recherche de défis à relever ! Création d'interfaces intuitives et d'expériences utilisateurs agréables",
    siteUrl: `https://essemey.dev`,
  },
  plugins: [
    `gatsby-plugin-split-css`
  ],
}