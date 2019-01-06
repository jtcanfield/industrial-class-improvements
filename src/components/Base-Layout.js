import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

export default class BaseLayout extends Component {
  constructor(props) {
      super(props)
      this.state = {

      };
  }

  render() {
    let base_layer_styles = {
        // "backgroundColor": "#D3D3D3",
        // "backgroundColor": "#EEEEEE",
        // "backgroundColor": "#5D711F",
        // "backgroundColor": "#60AC68",
        "width": "100%",
        "height": "100%",
        "backgroundColor": "white",
        "minHeight": "800px"
    }

    return (
      <div style={base_layer_styles}>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
