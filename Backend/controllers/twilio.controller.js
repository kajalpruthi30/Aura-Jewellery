// twilio.controller.js
import twilio from 'twilio';
import dotenv from 'dotenv';

dotenv.config()


const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const sendMessage = async (req, res) => {

  try {
    const { selectedCountry, phoneNumber, message } = req.body;
    
    await client.messages.create({
      body: message,
      from: 'whatsapp:+14155238886',
      to: `whatsapp:${selectedCountry}${phoneNumber}`
    });

    res.status(200).json({ success: true, message: 'WhatsApp message sent successfully' });
  } 
  catch (error) {
    res.status(500).json({ success: false, message: 'Failed to send WhatsApp message', error });
  }
};
