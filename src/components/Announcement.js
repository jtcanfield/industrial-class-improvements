import React, { Component } from 'react';

class Announcement extends Component {
  render() {
    return (
      <div className="announcements">

        <h5 className="p-2">
          The Raleigh-Durham IWW is hosting an Organizer Training 101 on July 14-15!
        </h5>

        <h4 className="p-2">
          <a href="https://goo.gl/forms/KEQoPHjBz1Rz7Y3d2" target="_blank" rel="noopener noreferrer">
            Register Now
          </a>
        </h4>

        <p className="leftaligned px-3 py-1">
          The Organizer Training 101 (OT 101) is a two day event from 9am to 4pm at 430 Waterstone Dr. Hillsborough NC 27278, where two experienced workplace organizers share the IWW's strategy for organizing your workplace.
          You will learn legal and practical advice for strikes and other tactics that the IWW has been practicing for over 100 years.
          Free food will be provided by
          <a href="https://rdiww.org/wfw" target="_blank" rel="noopener noreferrer">
            Workers Feeding Workers!
          </a>
          Free childcare, rides, and housing will also be provided.
          The training is 8 hours each day, so please contact us if we can help you with anything.
        </p>

        <p className="leftaligned px-3 py-1">
          The IWW is committed to helping workers organize to win demands and change the balance of power in their workplaces.
          The Organizer Training will give you the tools, tactics, and strategies to build solidarity with your coworkers and take action to make real changes at your job.
        </p>

        <h4 className="p-2">
          <a href="https://goo.gl/forms/KEQoPHjBz1Rz7Y3d2" target="_blank" rel="noopener noreferrer">
            Click here to Register!
          </a>
        </h4>
      </div>
    );
  }
}

export default Announcement;
