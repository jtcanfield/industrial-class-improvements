import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Donate extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="Donate component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <h4 className="leftaligned">Want to donate? <NavLink to="/contact">Sign Up</NavLink> for the IWW!</h4>
          <p>The best way to donate to our branch is to join us and donate not just money, but your time, working with us to organize!</p>
          <p>However, if you still want to donate money, you can donate via our <a href="https://www.paypal.me/rdiwwgmb" target="_blank" rel="noopener noreferrer">paypal here</a></p>
        </div>
      </div>
    );
  }
}

export default Donate;
