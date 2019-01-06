import React from 'react';
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

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

// <Route path="/gdcflyer.jpg" render={(props) => ( "./posters/gdcflyer.jpg" )}/>
// <Route path="/gdcflyer.jpg" render={(props) => ( <img alt="GDC Flyer" src="./gdcflyer.jpg"/> )}/>
// <Route exact path="/" render={(props) => ( <Redirectpage/> )}/>
const App = () => (
  <BrowserRouter>
    <BaseLayout>
      <Route component={ScrollToTop} />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/events" component={Events} />
        <Route path="/iwoc" component={IWOC} />
        <Route path="/gdc" component={Gdc} />
        <Route path="/wfw" component={Wfw} />
        <Route path="/donate" component={Donate} />
        <Route path="/posters" component={Posters} />
        <Route path="/joinus" component={Join} />
        <Route path="/dues" component={Dues} />
        <Route path="/success" component={Duestaken} />
        <Route path="/sitemap" component={SitemapDownload} />
        <Route path="/home" component={Homepage} />
        <Route path="/" component={Redirectpage} />
        <Route path="" component={Redirectpage} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
);


export default App;
