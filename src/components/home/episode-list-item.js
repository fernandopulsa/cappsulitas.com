import React from "react"
// import { Link } from "gatsby"

import Moment from "react-moment"
import "moment/locale/es"

const EpisodeListItem = ({ data }) => (
  <article className="episode_item">
    {/* <Link to={`/episodio/${data.uid}`}> */}
    <p className="category">{data.data.category}</p>
    <p className="title">
      {data.data.number}: {data.data.titulo.text}
    </p>
    <p className="date">
      <Moment format="dddd, DD/MM/YYYY" locale="es">
        {data.data.date}
      </Moment>
    </p>
    <p className="text">{data.data.summary.text}</p>
    <audio src={data.data.mp3_url.url} controls />
    {/* </Link> */}
  </article>
)

export default EpisodeListItem
