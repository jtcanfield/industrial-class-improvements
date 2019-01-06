import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './Base-Layout';
import Homepage from './Homepage';
import About from './About';
import Contact from './Contact';
import Events from './Events';
import IWOC from './IWOC';
import Donate from './Donate';
import Wfw from './Wfw';
import Gdc from './Gdc';
import Join from './Join';
import Posters from './Posters';
import Redirectpage from './Redirect';
import Dues from './Dues';
import Duestaken from './Duestaken';
import SitemapDownload from './SitemapDownload';

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
