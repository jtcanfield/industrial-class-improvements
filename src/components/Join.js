import React, { Component } from 'react';
import request from 'superagent';

class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      email: "",
      phone: "",
      employer: "",
      occupation: "",
      worker: false,
      constitution: false,
      errormessages: false,
      duesValue: "",
      why: "",
      heardfrom: "",
      involved: "",
      skills: "",
      otherorganizations: "",
      internet: "",
    };
    this.submitform=this.submitform.bind(this);
    this.handlecheckboxchange=this.handlecheckboxchange.bind(this);
    this.handleSelectChange=this.handleSelectChange.bind(this);
  }
  componentWillMount(){
    if (window.innerWidth <= 640){
      window.scrollTo(0, 0);
    }
    request
      .post(`https://class-improvements-backend.herokuapp.com/wakeup`)
      .end((err, res) => {console.log(res);})
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value, errormessages:false});
    }
  }
  handlecheckboxchange = (event) => {
    this.setState({[event.target.id]: !this.state[event.target.id]});
  }
  handleSelectChange = (event) => {
    this.setState({ duesValue: event.target.value });
  }
  submitform(event){
    event.preventDefault();
    let workerdata = "";
    let constitutiondata = "";
    if (this.state.worker){workerdata = "true"};
    if (this.state.constitution){constitutiondata = "true"};
    var data = {
      name: this.state.name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      country: this.state.country,
      email: this.state.email,
      phone: this.state.phone,
      employer: this.state.employer,
      occupation: this.state.occupation,
      worker: workerdata,
      constitution: constitutiondata,
      why: this.state.why,
      heardfrom: this.state.heardfrom,
      involved: this.state.involved,
      skills: this.state.skills,
      otherorganizations: this.state.otherorganizations,
      internet: this.state.internet,
      duesValue: this.state.duesValue,
    }
    request
      // .post(`http://localhost:5000/submitapplication`)
      .post(`https://class-improvements-backend.herokuapp.com/submitapplication`)
      .send(data)
      .end((err, res) => {
        if(res === undefined){
          this.setState({errormessages:"Internal Server Error"});
        } else if(res.statusCode === 400){
          this.setState({errormessages:res.text});
        } else if(res.statusCode === 200){
          alert("Thank you for applying! Come to the next meeting and introduce yourself! We will have your card ready for you.");
          window.location.reload();
        } else {
          this.setState({errormessages:"Internal Server Error"});
        }
      })
  }
  render() {
    return (
      <div className="Join component" itemScope itemType="http://schema.org/WebPage">
        <div itemScope itemProp="mainContentOfPage">
          <div className="leftaligned">
            <h4>Join Us!</h4>
            <h5><a href="https://www.iww.org/PDF/Forms/join.pdf" target="_blank" rel="noopener noreferrer">You can download and print the form here ...</a></h5>
            <p>Or you can fill out the form electronically below!</p>
            <p>Items marked with a star<span className="requiredstar">*</span> are required.</p>
          </div>
          <form className="enterForm" onSubmit={this.handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('name')}
              value={this.state.name}
              placeholder="name"
              id="name"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('address')}
              value={this.state.address}
              placeholder="address"
              id="address"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="city">City:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('city')}
              value={this.state.city}
              placeholder="city"
              id="city"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="state">State:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('state')}
              value={this.state.state}
              placeholder="state"
              id="state"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="zip">Zip:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('zip')}
              value={this.state.zip}
              placeholder="zip"
              id="zip"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('country')}
              value={this.state.country}
              placeholder="country"
              id="country"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="email" onChange={this.updateFromField('email')}
              value={this.state.email}
              placeholder="email"
              id="email"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">phone:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="tel" onChange={this.updateFromField('phone')}
              value={this.state.phone}
              placeholder="phone"
              id="phone"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="employer">Employer:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('employer')}
              value={this.state.employer}
              placeholder="employer"
              id="employer"
              required="true"/>
            </div>
            <div className="form-group">
              <label htmlFor="occupation">Occupation:<span className="requiredstar">*</span></label><br/>
              <input className="textareastyle"
              type="text" onChange={this.updateFromField('occupation')}
              value={this.state.occupation}
              placeholder="occupation"
              id="occupation"
              required="true"/>
            </div>
            <div className="form-group">
              <input type="checkbox" onChange={this.handlecheckboxchange}
              checked={this.state.worker}
              value={this.state.worker}
              id="worker"
              required="true"/>
              <label htmlFor="worker">I affirm that I am a worker and that I am not an employer.<span className="requiredstar">*</span></label><br/>
            </div>
            <div className="form-group">
              <input className="textareastyle"
              type="checkbox" onChange={this.handlecheckboxchange}
              checked={this.state.constitution}
              value={this.state.constitution}
              id="constitution"
              required="true"/>
              <label htmlFor="constitution">I agree to abide by the constitution and regulations of this
                organization, and will study its principles and acquaint myself with
                its purposes.<span className="requiredstar">*</span></label><br/>
            </div>
            <p>Dues Rate Based on Monthly Income</p>
            <select
              value={this.state.duesValue}
              onChange={this.handleSelectChange}>
              <option value="">Choose your Dues (income per month)</option>
              <option value="minimum">Under $2,000 = $11 per month</option>
              <option value="standard">$2,000 – 3,500 = $22 per month</option>
              <option value="maximum">Over $3,500 = $33 per month</option>
            </select>
            <p>If you would like to, answer the questions below to help us get to know you!</p>
            <div className="form-group">
              <label htmlFor="why">Why are you joining the IWW?</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('why')}
              value={this.state.why}
              id="why"/>
            </div>
            <div className="form-group">
              <label htmlFor="heardfrom">How did you hear about the IWW?</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('heardfrom')}
              value={this.state.heardfrom}
              id="heardfrom"/>
            </div>
            <div className="form-group">
              <label htmlFor="involved">How involved do you expect to be? What kind of activities would you like to participate in?</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('involved')}
              value={this.state.involved}
              id="involved"/>
            </div>
            <div className="form-group">
              <label htmlFor="skills">Please describe any special skills that you may have.</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('skills')}
              value={this.state.skills}
              id="skills"/>
            </div>
            <div className="form-group">
              <label htmlFor="otherorganizations">Have you been involved in other organizations? If so, which ones and what kind of activities did you get involved in as a member?</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('otherorganizations')}
              value={this.state.otherorganizations}
              id="otherorganizations"/>
            </div>
            <div className="form-group">
              <label htmlFor="internet">Do you have consistent internet access?</label><br/>
              <textarea type="text" className="textareastyle" rows="5"
              onChange={this.updateFromField('internet')}
              value={this.state.internet}
              id="internet"/>
            </div>
            {this.state.errormessages ? (this.state.errormessages):"" }
            <br/><div>
              <button className="submitbutton" type="submit" onClick={event => this.submitform(event)}>
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Join;
