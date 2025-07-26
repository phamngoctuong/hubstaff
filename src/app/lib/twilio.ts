import twilio from 'twilio';
const accountSid = process.env.ACCOUNT_SID!;
const authToken = process.env.AUTH_TOKEN;
const client = twilio(accountSid, authToken);
export const sendSMS = (to: string, body: string) =>
  client.messages.create({
    body,
    from: process.env.FROMPHONE,
    to
  });
