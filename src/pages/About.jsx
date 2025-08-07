import React from "react";
import historik from "../assets/img/historik.png";
import butiken from "../assets/img/butiken.png";
import butiken2 from "../assets/img/butiken2.jpg";
import butiken3 from "../assets/img/butiken3.jpg";

class About extends React.Component {
  render() {
    return (
      <main>
        <section className="container green-dotted-background">
          <p>
            Mikael Andersson, VD
            <br />
            Fredrik Bengtsson, Tekniker mm
          </p>
          <h1>Historik</h1>
          <div className="content">
            <div className="content-half">
              <p>
                ÅRB grundades av <b>Å</b>ke <b>R</b>ickard <b>B</b>ergkvist som
                utvecklade ett eget ekonomiprogram och växte företaget med
                tiden. Hans fru Anette anställdes för administration.
              </p>
              <p>
                2005 anställdes Stefan Söderström för att hjälpa till. 2008
                anslöt Mikael Andersson och 2015 tog han över efter att Åke gått
                i pension. Åke har haft stor betydelse för företaget, som Mikael
                fortsätter att driva i samma anda.
              </p>
            </div>
            <div className="content-half">
              <div className="om-oss-image-container">
                <img
                  src={historik}
                  className="om-oss-image"
                  alt="Åke Bergkvist och hans fru Anette står framför en öppen spis och ler mot kameran"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container green-grid-background">
          <h1>Viktiga år</h1>
          <ul className="timeline">
            <li>
              <h2>1986</h2>
              <p>ÅRB Datakonsult, produkt: System FKL-ADM för enanvändare.</p>
            </li>
            <li>
              <h2>1988</h2>
              <p>ÅRB Datakonsult HB, nätverksversion.</p>
            </li>
            <li>
              <h2>1991</h2>
              <p>
                ÅRB Datasystem AB, kontor på Frideborgsgatan, vidareutveckling
                av FKL-ADM och försäljning av datautrustning.
              </p>
            </li>
            <li>
              <h2>2000</h2>
              <p>Flytt till Vagnstagatan, utökat sortiment.</p>
            </li>
            <li>
              <h2>2002</h2>
              <p>Flytt till Hovsgatan, större butik och serviceverkstad.</p>
            </li>
            <li>
              <h2>2015</h2>
              <p>
                Mikael Andersson tar över verksamheten och bildar Datorbutiken
                ÅRB AB. Åke Bergkvist går i pension men fortsätter med FKL.
              </p>
            </li>
            <li>
              <h2>2017</h2>
              <p>Utökat sortiment med musiktillbehör.</p>
            </li>
            <li>
              <h2>2020</h2>
              <p>
                Butiken byggs om igen, denna gång för kontor och musiksidan.
              </p>
            </li>
            <li>
              <h2>2021</h2>
              <p>Stefan flyttar, nya tekniker anställs.</p>
            </li>
            <li>
              <h2>2023</h2>
              <p>
                Fredrik anställs, final i Årets Serviceföretag, vunnit
                Tillgänglighetspris och Gammla Härnösandspojkars pris för hjälp
                med datorer.
              </p>
            </li>
          </ul>
          <div className="timeline-image-container">
            <img
              src={butiken}
              alt="Framsidan och ingången till Datorbutiken ÅRB, sett från höger"
              className="timeline-image"
            />
            <img
              src={butiken2}
              alt="Framsidan och ingången till Datorbutiken ÅRB, sett rakt framifrån"
              className="timeline-image"
            />
            <img
              src={butiken3}
              alt="Framsidan och ingången till Datorbutiken ÅRB, sett från vänster"
              className="timeline-image"
            />
          </div>
        </section>
      </main>
    );
  }
}
export default About;
