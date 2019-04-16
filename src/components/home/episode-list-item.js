import React from "react"
import { Link } from "gatsby"

const EpisodeListItem = ({ data }) => (
  <article className="episode_item">
    <Link to={`/episodio/${data.uid}`}>
      <p>{data.data.category}</p>
      <p>{data.data.date}</p>
      {console.log("TCL: data", data)}
      <p>
        {data.data.number}: {data.data.titulo.text}
      </p>
      <p>{data.data.summary.text}</p>
    </Link>
  </article>
)

export default EpisodeListItem
