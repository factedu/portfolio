import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap";
import nav from '../constants/nav';
import '../styles/style.css';

const Header = ({ siteTitle }) => (
  <header className="header_area">
    <div className="main-menu">
      <Navbar fixed="top" expand="lg">
        <Navbar.Brand><Link to="/">Ravi S. Singh</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mr-auto"></div>
          <Nav>
            {nav.map(n => {
              return (
                <Link key={n.id} className="nav-link" activeClassName="active" to={n.link}>{n.title}</Link>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
