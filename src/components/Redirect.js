import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Redirectpage extends Component {
  render() {
    return (
      <div className="Redirectpage">
         <Redirect to="/home"/>
      </div>
    );
  }
}

export default Redirectpage;
