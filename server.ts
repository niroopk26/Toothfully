import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/book-appointment", (req, res) => {
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

    res.json({ success: true, message: "Appointment request received successfully!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
