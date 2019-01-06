import React, { Component } from 'react';

class About extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    let moreinfo ={
      "color":"#847878",
    }
    return (
      <div className="About component" itemScope itemType="http://schema.org/WebPage">
        <div className="leftaligned" itemScope itemProp="mainContentOfPage">
          <h4>What is the IWW?</h4>
          <p>
            The IWW is the Industrial Workers of the World (sometimes called “the
            Wobblies”), a democratic, rank-and-file labor organization dedicated
            to building workers’ power on the job.
          </p>
          <p>
            The IWW is run by its members, not by hired staff and union bosses. It
            has only one full-time paid officer, the General Secretary-Treasurer. All
            general officers are elected each year by the whole membership.
            There are no “career officers” in the IWW.
          </p>
          <p>
            Local Branches elect their own officers and have complete control over
            local affairs, as long as they abide by the IWW Constitution. Nobody
            else can tell workers on a job to go on strike, to end a strike, or to take
            any other job action.
          </p>
          <h4>Preamble to the IWW Constitution</h4>
          <p>
            The working class and the employing class have nothing in common. There can be no peace so long as hunger and want are found among millions of the working people and the few, who make up the employing class, have all the good things of life.
          </p>
          <p>
            Between these two classes a struggle must go on until the workers of the world organize as a class, take possession of the means of production, abolish the wage system, and live in harmony with the Earth.
          </p>
          <p>
            We find that the centering of the management of industries into fewer and fewer hands makes the trade unions unable to cope with the ever growing power of the employing class. The trade unions foster a state of affairs which allows one set of workers to be pitted against another set of workers in the same industry, thereby helping defeat one another in wage wars. Moreover, the trade unions aid the employing class to mislead the workers into the belief that the working class have interests in common with their employers.
          </p>
          <p>
            These conditions can be changed and the interest of the working class upheld only by an organization formed in such a way that all its members in any one industry, or in all industries if necessary, cease work whenever a strike or lockout is on in any department thereof, thus making an injury to one an injury to all.
          </p>
          <p>
            Instead of the conservative motto, "A fair day's wage for a fair day's work," we must inscribe on our banner the revolutionary watchword, "Abolition of the wage system."
          </p>
          <p>
            It is the historic mission of the working class to do away with capitalism. The army of production must be organized, not only for everyday struggle with capitalists, but also to carry on production when capitalism shall have been overthrown. By organizing industrially we are forming the structure of the new society within the shell of the old.
          </p>
          <h4 style={moreinfo}>More Info:</h4>
          <a href="https://www.iww.org/unions" target="_blank" rel="noopener noreferrer">Industrial Unionism</a><br/>
          <a href="https://www.iww.org/about/solidarityunionism" target="_blank" rel="noopener noreferrer">Solidarity Unionism</a><br/>
          <a href="https://www.iww.org/about/how-iww-differs-business-unions" target="_blank" rel="noopener noreferrer">How the IWW Differs from Business Unions</a><br/>
        </div>
      </div>
    );
  }
}

export default About;
