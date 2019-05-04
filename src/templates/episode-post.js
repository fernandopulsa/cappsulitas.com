import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { EpisodeListItemDetail } from "../components/home/episode-list-item"

const EpisodePost = ({ siteTitle, data }) => {
  console.log("TCL: EpisodePost -> data", data)
  const dataEpisode = data.allPrismicEpisode.edges[0].node
  return (
    <div className="episode_post">
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <div className="layout">
          <EpisodeListItemDetail data={dataEpisode} />
        </div>
      </Layout>
    </div>
  )
}

export default EpisodePost

export const query = graphql`
  query($uid: String) {
    allPrismicEpisode(filter: { uid: { eq: $uid } }) {
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
              html
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
