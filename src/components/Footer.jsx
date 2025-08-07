import React from "react";

class Footer extends React.Component {
    getBackgroundColor = () => {
    const currentPath = this.props.location.pathname;
    if (currentPath === "/Music") {
      return "music-footer";
    } else if (currentPath === "/About") {
      return "om-oss-footer";
    }
    return "";
  }


  render() {
    return (
      <footer className={`${this.getBackgroundColor()}`}>
        <div className="content">
          <div className="content-half footer-1">
            <p>Instagram: @datorbutikenarb</p>
            <p>Telefon: 0611-20215</p>
            <p>
              Facebook:{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/datorbutikenarb?locale=sv_SE"
              >
                Datorbutiken ÅRB AB
              </a>
            </p>
          </div>
          <div className="content-half footer-2">
            <p>
              <b>Datorbutiken ÅRB AB</b>
            </p>
            <p>Hovsgatan 17</p>
            <p>871 31 Härnösand</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
