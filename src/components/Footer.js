import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="Footer" itemScope itemType="http://schema.org/WPFooter">
        <p>
          See us on Facebook at <a href="https://www.facebook.com/triangleiww/" target="_blank" rel="noopener noreferrer">
            www.facebook.com/triangleiww
          </a> or Twitter <a href="https://twitter.com/triangleiww" target="_blank" rel="noopener noreferrer">
            @triangleiww
          </a>
        </p>
        <p>Check out our IWOC blog: <a href="https://raleighdurhamiwoc.wordpress.com/" target="_blank" rel="noopener noreferrer">
          raleighdurhamiwoc.wordpress.com
        </a></p>
      </div>
    );
  }
}

export default Footer;
