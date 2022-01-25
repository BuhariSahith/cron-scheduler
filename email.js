const API = "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"
var nodeCron = require('node-cron');

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey(API);



function getMessage() {
  const body = 'This is a test email using SendGrid from Node.js with CRONSCHEDULED';
  return {
    to: 'buhari01041997@gmail.com',
    from: 'buhari@intellectfaces.com',
    subject: 'Testing New email with Node.js , Node-Cron and SendGrid',
    text: body,
    html: `<strong>${body}</strong>`,
  };
}

async function sendEmail() {
  try {
    await sendGridMail.send(getMessage());
    console.log('Test email sent successfully');
  } catch (error) {
    console.error('Error sending test email');
    console.error(error);
    if (error.response) {
      console.error(error.response.body)
    }
  }
}

(async () => {
  console.log('Sending test email');
  await sendEmail();
})();

nodeCron.schedule('* * * * * *' , sendEmail)