require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteName: 'My Shop',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-datocms`,
      options: { apiToken: process.env.DATO_API_TOKEN },
    },
    {
      resolve: 'gatsby-plugin-snipcart',
      options: {
        apiKey: 'YjY2NTQxOGYtYWQxYS00ODI4LWI1ODQtYTk3ZTI3ZDgwMTI5NjM3MjM2OTE4MjEzMzU4Mzg5',
        autopop: true
      }
    },
  ],
}
