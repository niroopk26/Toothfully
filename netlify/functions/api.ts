import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

router.use(express.json());

// API Routes
router.post("/book-appointment", (req, res) => {
  const { name, phone, email, date, time, treatment, message } = req.body;
  
  console.log(`New appointment request from ${name}. Phone: ${phone}. Date: ${date}. Time: ${time}. Treatment: ${treatment}.`);
  
  // In a real application, you would integrate with an SMS service like Twilio here:
  /*
  const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  client.messages.create({
    body: `New appointment request from ${name}. Phone: ${phone}. Date: ${date}. Time: ${time}. Treatment: ${treatment}.`,
    from: process.env.TWILIO_PHONE_NUMBER,
    to: '+919901767470'
  });
  */

  res.json({ 
    success: true, 
    message: "Appointment request received successfully!",
    receivedData: { name, phone, date, time, treatment }
  });
});

router.get("/health", (req, res) => {
  res.json({ status: "ok", environment: "netlify-functions" });
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
