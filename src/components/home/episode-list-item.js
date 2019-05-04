import React from "react"
import { Link } from "gatsby"

import Moment from "react-moment"
import "moment/locale/es"

const EpisodeListItem = ({ data }) => (
  <article className="episode_item">
    <p className="category">{data.data.category}</p>
    <p className="title">
      {data.data.number}: {data.data.titulo.text}
    </p>
    <p className="date">
      <Moment format="dddd, DD/MM/YYYY" locale="es">
        {data.data.date}
      </Moment>
    </p>
    <div
      className="text_wrapper text"
      dangerouslySetInnerHTML={{
        __html: data.data.summary.html,
      }}
    />
    <audio src={data.data.mp3_url.url} controls />
    <div className="link_todetail">
      <Link to={`/episodio/${data.uid}`}>Ver notas del episodio</Link>
    </div>
  </article>
)

export const EpisodeListItemDetail = ({ data }) => (
  <article className="episode_item">
    <p className="category">{data.data.category}</p>
    <p className="title">
      {data.data.number}: {data.data.titulo.text}
    </p>
    <p className="date">
      <Moment format="dddd, DD/MM/YYYY" locale="es">
        {data.data.date}
      </Moment>
    </p>
    <div
      className="text_wrapper text"
      dangerouslySetInnerHTML={{
        __html: data.data.text.html,
      }}
    />
    <audio src={data.data.mp3_url.url} controls />
  </article>
)

export default EpisodeListItem
