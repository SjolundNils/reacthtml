import React from "react";
import computer1 from "../assets/img/Computer1.png";
import mouseKeyboard from "../assets/img/mousekeyboard.png";
import LikeButton from "../components/LikeButton.jsx";


class Home extends React.Component {
  render() {
    return (
      <main>
        <div className="container video-container">
          <video autoPlay loop muted playsInline className="background-video">
            <source
              src="https://videos.pexels.com/video-files/7141174/7141174-uhd_2560_1440_24fps.mp4"
              type="video/mp4"
            />
            Din webbläsare stödjer inte videor.
          </video>
          <div className="video-overlay"></div>
          <div className="content">
            <div className="content-half" id="headline">
              <h1 className="hero-text">
                <span>Butik.</span>
                <span>Service.</span>
                <span>Support.</span>
              </h1>
              <p>
                mån-fre
                <br />
                <b>9:00-17:00</b>
              </p>
              <LikeButton initialLiked={false} />
            </div>

            <div className="content-half">
              <iframe
                title="Karta över Härnösand"
                className="map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=17.92981624603272%2C62.619996844530554%2C17.965865135192875%2C62.634006332992485&amp;layer=hot&amp;marker=62.62700241576875%2C17.947840690612793"
              ></iframe>
              <p style={{ textAlign: "end" }}>
                Hovsgatan 17
                <br />
                871 31 Härnösand
              </p>
            </div>
          </div>
        </div>
        <section className="container blue-dotted-background">
          <div className="content">
            <div className="content-image ticket">
              <img
                src={computer1}
                alt="Pixelerad ikon föreställande en dator"
                className="retro-icon"
              />
            </div>
            <div className="content-text">
              <h2>Välkommen till Datorbutiken ÅRB i Härnösand!</h2>
              <p>
                Vi erbjuder datorer, gamingtillbehör, komponenter,
                nätverksutrustning, programvaror, skrivare och tillbehör för
                både privatpersoner och företag
              </p>
            </div>
          </div>
        </section>

        <section className="container blue-grid-background">
          <div className="content">
            <div className="content-text">
              <h2>Service och Reparationer för Dig!</h2>
              <p>
                Vi erbjuder reparationer, uppgraderingar,specialbyggda datorer
                och RUT-avdrag på hembesök.
              </p>
              <p>
                Upptäck vår avdelning för musiktillbehör, "Lilla Musikbutiken"!
              </p>
              <p>Bra service och nöjda kunder är vårt fokus - välkommen in!</p>
              <p>
                Faktura från oss? Du hittar den
                <a
                  href="https://minfaktura.fortnox.se/?pe_data=D42435F4772404A5A47784046514671%7C20922085"
                  target="_blank"
                  rel="noreferrer"
                >
                  här.
                </a>
              </p>
            </div>
            <div className="content-image">
              <img
                src={mouseKeyboard}
                alt="Pixelerad ikon föreställande en mus, tangentbord och en cd-skiva"
                className="retro-icon"
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
