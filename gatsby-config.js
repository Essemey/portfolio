/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  jsxRuntime: "automatic",
  siteMetadata: {
    title: 'Essemey | Développeur Front End',
    description: 'Développeur Front End ambitieux à la recherche de défis à relever !',
    siteUrl: `https://www.essemey.dev`,
  },
  plugins: [
    `gatsby-plugin-split-css`
  ],
}