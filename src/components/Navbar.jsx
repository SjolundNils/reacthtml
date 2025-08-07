import React from "react";
import { NavLink} from "react-router-dom";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  getBackgroundColor = () => {
    const currentPath = this.props.location.pathname;
    if (currentPath === "/Music") {
      return "music-nav";
    } else if (currentPath === "/About") {
      return "om-oss-nav";
    }
    return "";
  }

  render() {
    const backgroundColor = this.getBackgroundColor();

    return (
      <nav className={`navbar ${backgroundColor}`}>
        <NavLink to="/Home">
          <img
            src={require("../assets/img/Logo.png")}
            alt="Datorbutiken ÅRB:s logotyp"
          />
        </NavLink>
        <button id="nav-button" onClick={this.toggleMenu}>
          {this.state.isOpen ? "✕" : "☰"}
        </button>
        <ul className="nav-links">
          <li>
            <NavLink to="/Home">Hem</NavLink>
          </li>
          <li>
            <NavLink to="/Services">Tjänster</NavLink>
          </li>
          <li>
            <NavLink to="/Music">Lilla musikbutiken</NavLink>
          </li>
          <li>
            <NavLink to="/About">Om oss</NavLink>
          </li>
          <li>
            <NavLink to="/Contact">Kontakt</NavLink>
          </li>
        </ul>
        <div id="fullscreen-menu" className={this.state.isOpen ? "active" : ""}>
          <ul className="nav-links">
            <li>
              <NavLink to="/Home">
                <img
                  src={require("../assets/img/Logo.png")}
                  alt="Datorbutiken ÅRB:s logotyp"
                />
              </NavLink>
            </li>
            <li>
              <NavLink to="/Home">Hem</NavLink>
            </li>
            <li>
              <NavLink to="/Services">Tjänster</NavLink>
            </li>
            <li>
              <NavLink to="/Music">Lilla musikbutiken</NavLink>
            </li>
            <li>
              <NavLink to="/About">Om oss</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Kontakt</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
