import React, { Component } from 'react';
import { Redirect } from 'react-router'; /* eslint-disable-line */
import Download from '@axetroy/react-download';

class SitemapDownload extends Component {
  componentDidMount() {
    this.inputElement.click();
  }

  render() {
    return (
      <div>
        <Download file="sitemap.xml" content="# hello world">
          <button ref={input => this.inputElement = input} type="button">Click and Download file</button> {/* eslint-disable-line */}
        </Download>
        <Redirect to="/home" />
      </div>
    );
  }
}

export default SitemapDownload;
