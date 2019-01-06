import React from 'react';
import { Redirect } from 'react-router'; /* eslint-disable-line */

const Redirectpage = () => (
  <div className="Redirectpage">
    <Redirect to="/home" />
  </div>
);

export default Redirectpage;
