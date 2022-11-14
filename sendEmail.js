const dotenv = require("dotenv");
dotenv.config();
const sgMail = require("@sendgrid/mail");
var fs = require("fs");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const workingDir = process.cwd();
const pathToAttachmentCucumber =
  workingDir + "/cypress/reports/cucumberReport.zip";
const attachmentCucumber = fs
  .readFileSync(pathToAttachmentCucumber)
  .toString("base64");

const msg = {
  to: "hieutrandn123@gmail.com",
  from: "hieutrandn123@gmail.com", // Use the email address or domain you verified above
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
  attachments: [
    {
      content: attachmentCucumber,
      filename: pathToAttachmentCucumber,
      type: "application/zip",
      disposition: "attachment",
    },
  ],
};
//ES6
sgMail.send(msg).then(
  () => {},
  (error) => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
);
//ES8
(async () => {
  try {
    await sgMail.send(msg);
  } catch (error) {
    console.error(error);

    if (error.response) {
      console.error(error.response.body);
    }
  }
})();
