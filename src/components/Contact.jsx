import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import request from 'superagent';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      message: '',
      errormessages: false,
      submitting: false,
    };
    this.submitform = this.submitform.bind(this);
  }

  updateFromField(stateKey) {
    return (event) => {
      this.setState({ [stateKey]: event.target.value, errormessages: false });
    };
  }

  submitform(event) {
    this.setState({ submitting: true });
    event.preventDefault();
    const data = {
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message,
    };
    request
      .post('/sendemail')
      .send(data)
      .end((err, res) => {
        if (res === undefined) {
          this.setState({ errormessages: 'Internal Server Error', submitting: false });
        } else if (res.statusCode === 400) {
          this.setState({ errormessages: res.text, submitting: false });
        } else if (res.statusCode === 200) {
          alert('Thank you for contacting us! We will reach out to you soon!');
          window.location.reload();
        } else {
          this.setState({ errormessages: 'Internal Server Error', submitting: false });
        }
      });
  }

  render() {
    const iframelink = 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftriangleiww%2Fevents%2F&tabs=messages&width=320&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=196378587576073';
    const iframestyles = {
      width: '320px',
      height: '300px',
      border: 'none',
      overflow: 'hidden',
      scrolling: 'no',
      frameborder: '0',
      allowTransparency: 'true',
    };
    return (
      <div className="Contact component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <h4 className="leftaligned">Contact Us</h4>
          <NavLink
            className="verti-center header_link"
            activeClassName="active_header_link"
            to="/joinus"
          >
            Want to join? Download the form or join electronically here!
          </NavLink>
          <p className="leftaligned">Questions? Comments? Want to get involved? Send us a message below, on Facebook, or email us at <a href="mailto:rdiwwgmb@gmail.com?Subject=Message%20From%20Website" target="_top">rdiwwgmb@gmail.com</a>!</p>
          <form className="enterForm" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:<br />
                <input
                  className="textareastyle"
                  type="email"
                  onChange={this.updateFromField('email')}
                  value={this.state.email}
                  placeholder="email"
                  id="email"
                  required="true"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:<br />
                <input
                  className="textareastyle"
                  type="tel"
                  onChange={this.updateFromField('phone')}
                  value={this.state.phone}
                  placeholder="phone"
                  id="phone"
                  required="true"
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:<br />
                <textarea
                  type="text"
                  className="textareastyle"
                  rows="5"
                  onChange={this.updateFromField('message')}
                  value={this.state.message}
                  placeholder="message"
                  id="message"
                  required="true"
                />
              </label>
            </div>
            {this.state.errormessages ? (this.state.errormessages) : ''}
            <br />
            <div>
              <button className="submitbutton" type="submit" onClick={event => this.submitform(event)}>
                {this.state.submitting && <img alt="loading" src="./loading.svg" className="loadingsvg" />}
                Send Message
              </button>
            </div>
          </form>
          <br /><br />
          <iframe
            title="events"
            src={iframelink}
            style={iframestyles}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
