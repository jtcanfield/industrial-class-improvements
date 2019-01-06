import React from 'react';
import { Redirect } from 'react-router';

const Redirectpage = () => (
  <div className="Redirectpage">
    <Redirect to="/home" />
  </div>
);

export default Redirectpage;
