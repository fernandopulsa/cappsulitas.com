import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import EpisodeListItem from "../components/home/episode-list-item"

const IndexPage = ({ data }) => {
  const epidodes = data.allPrismicEpisode.edges
  console.log("TCL: IndexPage -> epidodes", epidodes)
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="episodes_wrapper layout">
        {epidodes.map((data, i) => (
          <EpisodeListItem data={data.node} key={i} />
        ))}
      </div>
    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  {
    allPrismicEpisode {
      edges {
        node {
          id
          uid
          data {
            titulo {
              text
            }
            date
            number
            category
            mp3_url {
              url
            }
            summary {
              text
            }
            text {
              html
            }
          }
        }
      }
    }
  }
`
