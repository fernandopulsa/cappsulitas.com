/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query {
      allPrismicEpisode {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const template = path.resolve("src/templates/episode-post.js")

  console.log("TCL: exports.createPages -> pages", pages)
    pages.data.allPrismicEpisode.edges.forEach(edge => {
      console.log("TCL: exports.createPages -> edge.node.uid", edge.node.uid)
      createPage({
        path: `/episodio/${edge.node.uid}`,
        component: template,
        context: {
          uid: edge.node.uid,
        },
      })
    })
}
