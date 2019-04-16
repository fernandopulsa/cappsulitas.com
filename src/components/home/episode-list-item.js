import React from "react"

const EpisodeListItem = ({ data }) => (
  <article className="episode_item">
    {console.log("TCL: data", data)}
    <p>{data.titulo.text}</p>
  </article>
)

export default EpisodeListItem
