import { default as db } from "./models/index.js";

import express from "express";
import cors from "cors";


const app = express();
app.use(cors());
app.get("/", (req, res) => {
  return res.status(200).json({ message: "🦈 App is working 🦈" });
});



export default app;
