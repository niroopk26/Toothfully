import express, { Router } from "express";
import serverless from "serverless-http";

const app = express();
const router = Router();

router.use(express.json());

// API Routes
router.get("/health", (req, res) => {
  res.json({ status: "ok", environment: "netlify-functions" });
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
