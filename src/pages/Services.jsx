import React from "react";
import Checkmark from "../components/Checkmark";


class Services extends React.Component {
  render() {
    return (
      <main>
        <section className="container blue-grid-background">
          <div className="content">
            <div className="content-half">
              <h1 className="typewritereffect">Behöver du hjälp?</h1>
            </div>

            <div className="content-half">
              <h3>Vi erbjuder:</h3>
              <ul className="services-list">
                <li>
                  <Checkmark/> Byggnation av
                  speldatorer på beställning
                </li>
                <li>
                  <Checkmark/> Reparation av
                  datorer (stationära och bärbara)
                </li>
                <li>
                  <Checkmark/> Fjärrsupport
                </li>
                <li>
                  <Checkmark/>Uppgraderingar av programvara och komponenter
                </li>
                <li>
                  <Checkmark/> Dataräddning
                  från trasiga hårddiskar
                </li>
                <li>
                  <Checkmark/>{" "}
                  Nätverkslösningar för hem och kontor
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="container blue-dotted-background">
          <div className="content">
            <div className="content-image">
              <img
                src={require("../assets/img/expansion_board-1.png")}
                alt="Pixelerad ikon föreställande ett kretskort"
                className="retro-icon"
              />
            </div>
            <div className="content-text">
              <h2>Ska du köpa dator?</h2>

              <p>
                Vi hjälper dig att hitta rätt dator, komponenter eller skrivare
                som passar dina behov - varken mer eller mindre.
              </p>
              <p>
                Vid köp av datorpaket eller montering erbjuder vi paketpris
                istället för ordinarie priser.
              </p>
            </div>
          </div>
        </section>

        <section className="container blue-grid-background">
          <div className="content">
            <div className="content-text">
              <h2>Köpt dator hos oss?</h2>
              <p>
                Quick Fix ingår för ärenden som tar mindre än 10 minuter. För
                längre jobb tillämpas halvtimmesdebitering.
              </p>
              <p>
                <a href="kontakt.html">Telefonsupport</a> erbjuds för enklare
                frågor, medan mer avancerade ärenden kräver inlämning eller
                fjärrstyrning.
              </p>
            </div>
            <div className="content-image">
              <img
                src={require("../assets/img/telephony-2.png")}
                alt="Pixelerad ikon föreställande en dator kopplad till en telefon"
                className="retro-icon"
              />
            </div>
          </div>
        </section>

        <section className="container blue-dotted-background">
          <div className="content">
            <div className="content-image">
              <img
                src={require("../assets/img/application_hammer_grouppol-1.png")}
                alt="Pixelerad ikon föreställande en hammare"
                className="retro-icon"
              />
            </div>
            <div className="content-text">
              <h2>Inte köpt dator hos oss?</h2>
              <p>
                Du kan lämna in datorn till ordinarie priser. Telefonsupport och
                gratis hjälp för annan utrustning gäller inte, men vi hjälper
                dig gärna mot kostnad.
              </p>
              <p>
                <a href="../html/kontakt.html">Fråga oss</a> om du är osäker!
              </p>
            </div>
          </div>
        </section>
        <section className="container blue-dotted-background">
          <h2 className="centered">
            Fjärrstyrning -&gt; Ladda ned verktyget <a href="https://github.com/features/copilot">här</a>.
          </h2>
        </section>

        <section className="container pricing-container">
          <h2>Tjänster</h2>
          <table className="pricing-table">
            <tbody>
            <tr>
              <td className="pricing-table__service">Service i verkstad</td>
              <td className="pricing-table__price">425 kr / 30 min</td>
            </tr>

            <tr style={{ borderBottom: "none" }}>
              <td className="pricing-table__service">
                Hembesök & Support på plats
              </td>
              <td className="pricing-table__price lower-opacity">1180 kr / h</td>
            </tr>

            <tr>
              <td className="pricing-table__service">
                &nbsp; -&gt; Med RUT-avdrag för privatkunder
              </td>
              <td className="pricing-table__price">590 kr / h</td>
            </tr>
            </tbody>
          </table>

          <h2>Fastpriser</h2>
          <table className="pricing-table">
            <tbody>
            <tr>
              <td className="pricing-table__service">Felsökning av dator</td>
              <td className="pricing-table__price">425 kr</td>
            </tr>

            <tr>
              <td className="pricing-table__service">"Quick fix"</td>
              <td className="pricing-table__price">290 kr</td>
            </tr>
            </tbody>
          </table>

          <p>
            &#x1F6C8; I Verkstan debiterar vi per påbörjad halvtimme, med en
            minsta kostnad på 30 minuter. Arbetsinsatsen varierar beroende på
            uppdragets omfattning och kan ta allt från några minuter till flera
            timmar. Efter felsökning kontaktar vi dig alltid innan vi påbörjar
            ytterligare arbete. Vid hembesök är den minsta debiteringen 1 timme,
            oavsett typ av problem.
          </p>
        </section>
      </main>
    );
  }
}

export default Services;
