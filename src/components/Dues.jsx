import React, { Component } from 'react';
import request from 'superagent';

class Dues extends Component {

  render() {
    return (
      <div className="Dues component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <h4 className="leftaligned">
            Pay Your Dues to the Raleigh-Durham IWW
          </h4>
          <small className="leftaligned">
            Note: Dues paid here will go directly to the Raleigh-Durham
            branch of the IWW. You cannot pay dues to another branch.
          </small>
          <br />
          <small className="leftaligned">
            PayPal charges a small fee for every transaction. That fee has been included in the prices below.
          </small>
          <p />
          <div className="dues_form">
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="LHL3TDRYT7PWW" />
              <input type="hidden" name="on0" value="Income Per Month Dues" />
              Income Per Month --- Dues<br /><br />
              <select name="os0">
                <option value="Unemployed ---">Unemployed --- $6.49 USD</option>
                <option value="Under $2,000/mo ---">Under $2,000/mo --- $11.64 USD</option>
                <option value="$2,000 - $3,500/mo ---">$2,000 - $3,500/mo --- $22.97 USD</option>
                <option value="Over $3,500/mo ---">Over $3,500/mo --- $34.29 USD</option>
              </select><br /><br />
              <input type="hidden" name="on1" value="Enter your first and last name" />
              Enter your first and last name<br /><br />
              <input type="text" name="os1" maxLength="200" /><br /><br />
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_paynow_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
            <p>
              Payments made securely and anonymously through PayPal
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dues;
