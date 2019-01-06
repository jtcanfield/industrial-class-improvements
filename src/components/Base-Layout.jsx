import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const baseLayerStyles = {
      // "backgroundColor": "#D3D3D3",
      // "backgroundColor": "#EEEEEE",
      // "backgroundColor": "#5D711F",
      // "backgroundColor": "#60AC68",
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      minHeight: '800px',
    };

    return (
      <div style={baseLayerStyles}>
        <Header />
        <div className="body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
