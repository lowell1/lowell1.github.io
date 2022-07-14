module.exports = {
  siteMetadata: {
    title: `Lowell Jacobs`,
    // siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/content/`,
      },
    },
  ],
};
