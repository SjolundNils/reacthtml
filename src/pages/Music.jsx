import React from "react";
import musikbutiken from "../assets/img/musikbutiken.jpg";
import crafton from "../assets/img/Crafton.png";
import emn from "../assets/img/emn.png";
import bandet from "../assets/img/bandet.jpg";
import janne from "../assets/img/Janne.jpg";

class Music extends React.Component {
  render() {
    return (
      <main>
        <section className="container red-grid-background">
          <div className="content">
            <div className="content-half">
              <h1>"Lilla Musik&shy;butiken"</h1>
              <p>Ja det låter litet men det är vad det är.</p>
              <p>
                Vi vill underlätta för musiker i Härnösand och Kramfors så att
                ni slipper resa till Sundsvall för t.ex. nya strängar eller
                trumpinnar.
              </p>
              <p>
                Vi fokuserar på instrumenttillbehör och tar hem instrument på
                beställning. Stöd oss genom att handla lokalt!
              </p>
            </div>
            <div className="content-half">
              <img
                src={musikbutiken}
                alt="Musikavdelning i en butik med gitarrer, gitarrsträngar, kablar och tillbehör upphängda på en vägg."
                className="music-picture"
              />
            </div>
          </div>
        </section>

        <section className="container red-dotted-background">
          <div className="content">
            <div className="content-text">
              <h2>Saknas ditt tillbehör?</h2>

              <p>
                Berätta vad du behöver så försöker vi ta in det - för din skull!
              </p>
            </div>
            <div className="content-image music-suppliers">
              <div>
                <p>Vi kan köpa in från dessa leverantörer:</p>
                <div className="music-supplier">
                  <img
                    src={crafton}
                    alt="Crafton:s logotyp"
                  />
                  <a href="https://www.crafton.se/">Crafton</a>
                </div>
                <div className="music-supplier">
                  <img src={emn} alt="Emnnordics logotyp" />
                  <a href="https://www.emnordic.se/">EM-nordic</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container red-grid-background">
          <div className="content">
            <div className="content-image">
              <img
                src={bandet}
                className="bandpicture"
                alt="Bandet:s logotyp"
              />
            </div>
            <div className="content-text">
              <h2>Rabatter för lokala band</h2>

              <p>
                Vi sponsrar gärna lokala band med bättre priser.
                <a href="../html/kontakt.html">Skicka er logga</a> så får ni en
                länk på vår hemsida och kan länka tillbaka till oss.
              </p>
            </div>
          </div>
        </section>

        <section className="container red-dotted-background">
          <div className="content">
            <div className="content-text">
              <h2>Omsträngning av gitarr</h2>

              <p>
                Omsträngning kostar priset för strängarna + 199 kr, inklusive
                stämning. Observera att nya strängar kan behöva justeras.
              </p>
            </div>
            <div className="guitar content-image">
              <div className="string" id="string1"></div>
              <div className="string" id="string2"></div>
              <div className="string" id="string3"></div>
              <div className="string" id="string4"></div>
              <div className="string" id="string5"></div>
              <div className="string" id="string6"></div>
            </div>
          </div>
        </section>

        <section className="container red-grid-background">
          <div className="content">
            <div className="content-text">
              <h2>Varför satsar ÅRB på musik?</h2>
              <p>
                Mikael Andersson, som driver ÅRB, växte upp i en musikerfamilj i
                Kramfors och har alltid haft musikintresset nära. Nu satsar han
                på att stärka Härnösand och bidra till stadens utveckling - med
                både datorer och musik.
              </p>

              <p>
                Mikaels pappa, Janne "Kramfors Mr. Musicman", spelade i många
                band och lagade alltid sina instrument och elektronik hemma.
                Mikael växte upp i den miljön, och kanske var det där hans
                intresse för teknik väcktes. Privat spelar han gärna gitarr när
                han kan.
              </p>

              <p>
                Janne, som syns i mitten av bilden med en saxofon, var en
                mångsidig musiker och producent. Han spelade bas, gitarr, piano
                och var också sångare. Han gick tyvärr bort 2016 efter 8 års
                sjukdom.
              </p>
            </div>
            <div className="content-image">
              <img
                src={janne}
                className="bandpicture"
                alt="Äldre band-affich med texten 'Dan Janzons', under texten står sex personer med olika instrument i händerna, två av dem håller en saxofon."
              />
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Music;
