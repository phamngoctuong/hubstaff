import twilio from 'twilio';
const apiKeySid = process.env.TWILIO_API_KEY!; // SK...
const apiKeySecret = process.env.TWILIO_API_SECRET!;
const accountSid = process.env.ACCOUNT_SID!;
const client = twilio(apiKeySid, apiKeySecret, { accountSid });
export const sendSMS = (to: string, body: string) =>
  client.messages.create({
    to,
    body,
    messagingServiceSid: process.env.MESSAGING_SERVICE_SID!,
  });
