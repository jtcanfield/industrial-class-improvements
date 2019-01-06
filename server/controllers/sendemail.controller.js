const mailgun = require('mailgun-js')({ apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN });

module.exports = async (req, res) => {
  try {
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Invalid Email').isEmail();
    req.checkBody('email', 'Email must be at least 5 characters').isLength({ min: 5 });
    req.checkBody('phone', 'Phone number is required').notEmpty();
    req.checkBody('phone', 'Phone number is too short').isLength({ min: 6 });
    req.checkBody('message', 'A message is required').notEmpty();
    const result = await req.getValidationResult();
    if (!result.isEmpty()) {
      return res.status(400).send(result.array()[0].msg);
    }
    const text = `
        Email: ${req.body.email}
        Phone: ${req.body.phone}
        Message: ${req.body.message}
        `;
    const data = {
      from: req.body.email,
      to: process.env.EMAIL_1,
      // cc: process.env.EMAIL_2,
      subject: `MESSAGE RECIEVED FROM WEBSITE ${req.body.phone}`,
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
