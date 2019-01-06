const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

module.exports = async (req, res) => {
  try {
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('address', 'Address is required').notEmpty();
    req.checkBody('city', 'City is required').notEmpty();
    req.checkBody('state', 'State is required').notEmpty();
    req.checkBody('zip', 'Zip is required').notEmpty();
    req.checkBody('zip', 'Zip must be 5 characters').isLength({ min: 5 });
    req.checkBody('country', 'Country is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('email', 'Email must be at least 5 characters').isLength({ min: 5 });
    req.checkBody('phone', 'Phone number is required').notEmpty();
    req.checkBody('phone', 'Phone number is too short').isLength({ min: 6 });
    req.checkBody('employer', 'Employer is required. If unemployed, put unemployed.').notEmpty();
    req.checkBody('occupation', 'Occupation is required. If unemployed, put unemployed.').notEmpty();
    req.checkBody('worker', 'Check checkboxes').notEmpty();
    req.checkBody('constitution', 'Check checkboxes').notEmpty();
    req.checkBody('duesValue', 'Please select your dues').notEmpty();
    const result = await req.getValidationResult();
    if (!result.isEmpty()) {
      return res.status(400).send(result.array()[0].msg);
    }
    const text = `
    Name: ${req.body.name}
    Address: ${req.body.address}
    City: ${req.body.city}
    State: ${req.body.state}
    Zip: ${req.body.zip}
    Country: ${req.body.country}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Employer: ${req.body.employer}
    Occupation: ${req.body.occupation}
    Dues: ${req.body.duesValue}

    Why are you joining the IWW?:
    ${req.body.why}
    How did you hear about the IWW?:
    ${req.body.heardfrom}
    How involved do you expect to be? What kind of activities would you like to participate in?:
    ${req.body.involved}
    Please describe any special skills that you may have:
    ${req.body.skills}
    Have you been involved in other organizations? If so, which ones and what kind of activities did you get involved in as a member?:
    ${req.body.otherorganizations}
    Do you have consistent internet access?:
    ${req.body.internet}
    `;

    const data = {
      from: req.body.email,
      to: process.env.EMAIL_1,
      // cc: process.env.EMAIL_2,
      subject: 'APPLICATION RECIEVED FROM WEBSITE',
      text,
    };
    return mailgun.messages().send(data, (error) => {
      if (error) {
        throw error;
      }
      return res.status(200).send('Message Sent');
    });
  } catch (error) {
    return res.status(500).send('Unable to send message. Please try again later');
  }
};
