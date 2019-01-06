import React, { Component } from 'react';

class Posters extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    let posters = {
      "width":"100%",
      "marginBottom":"50px",
      "border":"1px solid black",
    }
    return (
      <div className="Posters component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <h4 className="leftaligned">Posters</h4>
          <div className="poster_holder">
            <a href="https://i.imgur.com/UjTfFCs.jpg" target="_blank" rel="noopener noreferrer">
              <h5>
                General Defense Comittee Flyer
              </h5>
              <img alt="General Defense Comittee Flyer" src="./gdcflyer.jpg" style={posters}/>
            </a>
            <a href="https://i.imgur.com/POeC395.jpg" target="_blank" rel="noopener noreferrer">
              <h5>
                Anti-Identity Evropa Flyer
              </h5>
              <img alt="Community Defense Poster" src="./iepostercolor.jpg" style={posters}/>
            </a>
            <a href="https://i.imgur.com/Zyi0al6.jpg" target="_blank" rel="noopener noreferrer">
              <h5>
                Anti-Nazi Poster
              </h5>
              <img alt="IWW Anti-Nazi Poster" src="./iwwantinaziposter.jpg" style={posters}/>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Posters;
