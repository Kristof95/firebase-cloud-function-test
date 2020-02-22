import * as functions from 'firebase-functions';
import sgMail from '@sendgrid/mail';

const MAIL_API_KEY = functions.config().sendgrid.key;
const MAIL_TEMPLATE = functions.config().sendgrid.template;
const APP_URL = functions.config().app.url;
sgMail.setApiKey(MAIL_API_KEY);

const sendWelcomeMail = (email: string) => {
  const message = {
    to: email,
    from: 'matrixsprt@gmail.com',
    templateId: MAIL_TEMPLATE,
    dynamicTemplateData: {
      subject: 'De jó, hogy itt vagy!',
      name: email,
      app_url: APP_URL,
    },
  };
  return sgMail.send(message);
};

export const sendMail = functions
  .region('europe-west1')
  .https.onCall(async (data, context) => {
    console.log(data);
    console.log(context);
    await sendWelcomeMail("matrixsprt@gmail.com");
  })

export default sendMail;