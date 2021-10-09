import sgMail from "@sendgrid/mail";

export default function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { contactMethod, contactValue, name, email } = JSON.parse(req.body);
  const msg = {
    to: process.env.CONTACT_US_RECIPIENT,
    from: process.env.CONTACT_US_SENDER,
    subject: "You received a contact request from the website!",
    html: `
${name} (${email}) is requesting information!

${contactMethod}: ${contactValue}
    `,
  };

  sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({});
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
}
