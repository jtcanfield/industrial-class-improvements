import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './Base-Layout.js';
import Homepage from './Homepage.js';
import About from './About.js';
import Contact from './Contact.js';
import Events from './Events.js';
import IWOC from './IWOC.js';
import Donate from './Donate.js';
import Wfw from './Wfw.js';
import Gdc from './Gdc.js';
import Join from './Join.js';
import Posters from './Posters.js';
import Redirectpage from './Redirect.js';
import Dues from './Dues.js';
import Duestaken from './Duestaken.js';
import SitemapDownload from './SitemapDownload.js';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <Route path="/gdcflyer.jpg" render={(props) => ( "./posters/gdcflyer.jpg" )}/>
    // <Route path="/gdcflyer.jpg" render={(props) => ( <img alt="GDC Flyer" src="./gdcflyer.jpg"/> )}/>
    // <Route exact path="/" render={(props) => ( <Redirectpage/> )}/>
    return (
      <BrowserRouter>
        <BaseLayout>
        <Route component={ScrollToTop} />
          <Switch>
            <Route path="/about" render={props => (<About />)} />
            <Route path="/contact" render={props => (<Contact />)} />
            <Route path="/events" render={props => (<Events />)} />
            <Route path="/iwoc" render={props => (<IWOC />)} />
            <Route path="/gdc" render={props => (<Gdc />)} />
            <Route path="/wfw" render={props => (<Wfw />)} />
            <Route path="/donate" render={props => (<Donate />)} />
            <Route path="/posters" render={props => (<Posters />)} />
            <Route path="/joinus" render={props => (<Join />)} />
            <Route path="/dues" render={props => (<Dues />)} />
            <Route path="/success" render={props => (<Duestaken />)} />
            <Route path="/sitemap" render={props => (<SitemapDownload />)} />
            <Route path="/home" render={props => (<Homepage />)} />
            <Route path="/" render={props => (<Redirectpage />)} />
            <Route path="" render={props => (<Redirectpage />)} />
          </Switch>
        </BaseLayout>
      </BrowserRouter>
    );
  }
}

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

export default App;
