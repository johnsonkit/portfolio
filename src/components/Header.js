import React from 'react';
import './Header.scss';

import {
  Link,
  NavLink
} from 'react-router-dom';


class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuOpened: false
    }
    this.handleBurgerIconClick = this.handleBurgerIconClick.bind(this);
    this.handleNavLinkClick = this.handleNavLinkClick.bind(this);
    this.toggleNavMenu = this.toggleNavMenu.bind(this);
  }

  toggleNavMenu () {
    this.setState({
      isMenuOpened: !this.state.isMenuOpened
    })
  }

  handleBurgerIconClick() {
    this.toggleNavMenu();
  }

  handleNavLinkClick(e) {
    const currentTarget = e.target;
    // exit it if the nodeName of the clicked element is not `A`
    if (currentTarget.nodeName !== 'A') {
      return;
    }

    // select the closest UL element
    let closestUlEl = currentTarget;
    while (closestUlEl.nodeName !== 'UL' ) {
      closestUlEl = closestUlEl.parentNode;
    }
    
    // Close the menu if one of the nav link is clicked
    if (closestUlEl.className.indexOf('active') >= 0) {
      this.toggleNavMenu();
    }
  }

  render() {
    const headerNavElClassName = this.state.isMenuOpened ? 'active' : '';
    
    return (
      <div className="header">
            <h1>
              <Link to="/">JK</Link>
            </h1>
            <ul className={`header--nav ${headerNavElClassName}`} onClick={this.handleNavLinkClick}>
              <li>
                <NavLink 
                  exact
                  to="/" 
                  activeClassName="active"
                  >
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/about" 
                  activeClassName="active"
                  >
                    About
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/work" 
                  activeClassName="active"
                  >
                    Work
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  activeClassName="active"
                  >
                    Contact
                </NavLink>
              </li>
            </ul>

            <div onClick={this.handleBurgerIconClick} className="header--nav__icon">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
    );
  }
}

export default Header;