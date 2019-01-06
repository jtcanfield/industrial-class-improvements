import React, { Component } from 'react';

class IWOC extends Component {
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="IWOC component" itemScope itemType="http://schema.org/WebPage">
        <div className="leftaligned" itemScope itemProp="mainContentOfPage">
          <h4>Incarcerated Workers Organizing Committee</h4>
          <p>Blog: <a href="https://raleighdurhamiwoc.wordpress.com/" target="_blank" rel="noopener noreferrer">
            raleighdurhamiwoc.wordpress.com
          </a></p>
          <p>
            Prisoners are on the front lines of wage slavery and forced slave labor where refusal to work while in prison results in inhumane retaliation and participating in slave labor contributes to the mechanisms of exploitation. The Industrial Workers of the World (IWW) has consciously grasped the importance of organizing prisoners so that prisoners can directly challenge prison slavery, work conditions, and the system itself: break cycles of criminalization, exploitation, and the state‐sponsored divisions of our working class. At the same time, the prison environment and culture is a melting pot of capitalistic and exploitative tactics and all forms of oppression. These poisons must be challenged in prisons, institutions, and in all of us through organized working‐class solidarity.
          </p>
          <p>
            Members of the IWW have created the IWOC, the Incarcerated Workers Organizing Committee, which functions as a liaison for prisoners to organize each other, unionize, and build solid bridges between prisoners on the inside and fellow workers on the outside. Prison is a setup, a big business, there to make money off the People. Neither the setup nor the slavery inside of prisons can be combated without the conscious participation of prisoners and the working class on the outside through mutual aid, solidarity, and the building of working relationships that transcend prison walls and the politics of mass incarceration. The IWOC has been actively reaching out to prisoners while at the same time prisoners have been reaching out to the IWW for representation and assistance in building a prisoners union. The IWOC has taken up the cause and is helping prisoners in every facility organize and build a union branch for themselves, which will together form a powerful IWW Industrial Union.
          </p>
          <p>
            To achieve this cage slave / wage slave alliance, the IWOC is accepting IWW membership applications from prisoners who agree with the IWW Constitution and believe that, to truly change prison conditions, prisoners must be organized and working towards such goals with the help and support of the working class on the outside. Prisoners will be full‐fledged members of the IWW with their own local prison branch to maintain and develop and will have the same rights and responsibilities of members on the outside. However, due the exploitative nature of the prison system, prisoners are granted free IWW membership and will not be required to pay dues while in prison. Outside members of the IWOC will be in direct communication with prisoners and provide organizing training, support, and guidance in union building, solidarity, and collaborative actions.
          </p>
          <p>
            We have a world to win and nothing to lose but our chains. In every ghetto, barrio, trailer park, and prison cell, working‐class solidarity will prevail!
          </p>
        </div>
      </div>
    );
  }
}

export default IWOC;
