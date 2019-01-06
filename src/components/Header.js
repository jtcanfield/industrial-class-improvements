import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalbuttonactive:false,
      showSubcommittees:false,
    };
    this.click = this.click.bind(this)
  }
  click = (event) => {
    if (event.target.id === "showSubcommittees"){
      this.setState({showSubcommittees:!this.state.showSubcommittees})
    } else {
      this.setState({modalbuttonactive:!this.state.modalbuttonactive, showSubcommittees:false})
    }
  }
  render() {
    let modalclasses = "navlinks hiddenmodal";
    let hitbox = "hitbox hiddenmodal";
    let arrowclasses = "modalbutton hiddenmodal";
    let actualarrow = "smallarrowright";
    let openmodalbackground = "";
    let dropdownContent = "dropdownContent";
    let subcommitteesDropdownIcon = "subcommitteesDropdownIcon"
    if(this.state.modalbuttonactive){
      modalclasses = "navlinks shownmodal";
      hitbox = "hitbox shownmodal";
      arrowclasses = "modalbutton shownmodal";
      actualarrow = "smallarrowleft";
      openmodalbackground = "openmodalbackground";
    }
    if (this.state.showSubcommittees){
      dropdownContent = "dropdownContent showSubcommitteesModal";
      subcommitteesDropdownIcon = "subcommitteesDropdownIconOpen"
    }
    return (
      <div className="Header" itemScope itemType="http://schema.org/WPHeader">
        <div className="header_logo_title">
          <div className="title_of_page" itemProp="name">
            Raleigh-Durham Industrial Workers of the World
          </div>
          <div className="fade"></div>
          <img alt="Logo of the Industrial Workers of the World" src="./IWW-Raleigh-Durham.svg" className="iwwlogo"/>
          <div className="curveholder">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
             width="1200.000000pt" height="129.000000pt" viewBox="0 0 1200.000000 129.000000"
             preserveAspectRatio="xMidYMax meet">
              <g transform="translate(0.000000,129.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M0 1037 l0 -156 38 -11 c120 -34 664 -167 877 -214 1516 -336 2945
              -515 4525 -567 396 -13 1439 -7 1790 10 1475 73 2782 242 4030 521 170 38 614
              146 703 170 l37 11 0 174 c0 96 -2 175 -5 175 -3 0 -99 -25 -213 -56 -519
              -139 -1334 -335 -1812 -435 -1025 -215 -1859 -350 -2670 -433 -753 -77 -1448
              -87 -2180 -31 -1399 108 -3320 481 -5102 992 -17 5 -18 -7 -18 -150z"/>
              </g>
            </svg>
          </div>
        </div>
        <div onClick={this.click} className={arrowclasses}>
          <span alt="open menu" className={actualarrow}></span>
          <div onClick={this.click} className={hitbox}></div>
        </div>
        <div role="navigation" itemScope itemType="http://schema.org/SiteNavigationElement" onClick={this.click} className={modalclasses}>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/home">
            <span itemProp="name">Home</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/about">
            <span itemProp="name">About</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/contact">
            <span itemProp="name">Contact</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/events">
            <span itemProp="name">Events</span>
          </NavLink>
          <div id="showSubcommittees" className="verti-center header_link dropdownMenu">
            <span id="showSubcommittees" className={subcommitteesDropdownIcon}>
              Subcommittees
            </span>
            <div className={dropdownContent}>
              <NavLink className="verti-center header_link"
                activeClassName="active_header_link"
                itemProp="url" to="/iwoc">
                <span itemProp="name">IWOC</span>
              </NavLink>
              <NavLink className="verti-center header_link"
                activeClassName="active_header_link"
                itemProp="url" to="/gdc">
                <span itemProp="name">GDC</span>
              </NavLink>
              <NavLink className="verti-center header_link"
                activeClassName="active_header_link"
                itemProp="url" to="/wfw">
                <span itemProp="name">WFW</span>
              </NavLink>
            </div>
          </div>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/posters">
            <span itemProp="name">Posters</span>
          </NavLink>
          <NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            itemProp="url" to="/dues">
            <span itemProp="name">Pay Dues</span>
          </NavLink>
          <a href="https://www.paypal.me/rdiwwgmb" target="_blank"
          rel="noopener noreferrer">
          Donate
          </a>
          {/*<NavLink className="verti-center header_link"
            activeClassName="active_header_link"
            to="/donate">
            Donate
          </NavLink>*/}
        </div>
        <div onClick={this.click} onTouchStart={this.click} className={openmodalbackground}></div>
      </div>
    );
  }
}

export default Header;
