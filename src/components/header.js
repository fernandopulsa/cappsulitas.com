import React from "react"
// const escuchame = "Escuchame en"
// const sigueme = "Sigueme"

const links = [
  {
    link: "https://open.spotify.com/show/5c8xgKWefID9GrpGalhGPL",
    title: `Spotify`,
  },
  {
    link: "https://podcasts.apple.com/us/podcast/cappsulitas/id1161128934",
    title: `iTunes`,
  },
  {
    link: "https://www.ivoox.com/podcast-cappsulitas_sq_f1314312_1.html",
    title: `iVoox`,
  },
  {
    link: "http://twitter.com/cappsulitas",
    title: `Twitter`,
  },
  {
    link: "https://www.spreaker.com/show/1890405/episodes/feed",
    title: `RSS`,
  },
]

const Header = ({ siteTitle }) => (
  <header>
    <div className="info_wrapper layout">
      <h1>Cappsulitas</h1>
      <h3>Trucos para tu vida digital y productividad en comodas pildoras</h3>
    </div>
    <div className="links_wrapper layout">
      {links.map((item, i) => (
        <div className="link_item" key={i}>
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            {item.title}
          </a>
        </div>
      ))}
    </div>
    <p className="giones layout">
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - -
    </p>
  </header>
)

export default Header
