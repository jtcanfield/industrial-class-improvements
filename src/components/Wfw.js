import React, { Component } from 'react';

class Wfw extends Component {
  constructor(props) {
    super(props);
    this.state = { width: '0', height: '0' };
  }
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    let iframelink = `https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FWorkersFeedingWorkers%2F&tabs=timeline&width=${this.state.width}&height=1000&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=196378587576073`
    let iframestyles = {
      "width":`${this.state.width}px`,
      "height":`1000px`,
      "border":"none",
      "overflow":"hidden",
      "scrolling":"yes",
      "frameborder":"0",
      "allowTransparency":"true",
    }
    if(this.state.width > 520){
      iframestyles = {
        "width":`500px`,
        "height":`1000px`,
        "border":"none",
        "overflow":"hidden",
        "scrolling":"no",
        "frameborder":"0",
        "allowTransparency":"true",
      }
    }
    return (
      <div className="Wfw component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <h4 className="leftaligned">Workers Feeding Workers</h4>
          <iframe title="news" src={iframelink}
          style={iframestyles}></iframe>
        </div>
      </div>
    );
  }
}

export default Wfw;
