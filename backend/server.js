const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

// ===============================
// Middleware
// ===============================
app.use(cors());
app.use(express.json());

// ===============================
// Check Gemini API Key
// ===============================
if (!process.env.GEMINI_API_KEY) {
  console.error("❌ GEMINI_API_KEY is missing in .env file");
  process.exit(1);
}

console.log("✅ Gemini API key loaded");

// ===============================
// Gemini AI
// ===============================
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

// ===============================
// Test Route
// ===============================
app.get("/", (req, res) => {
  res.json({
    message: "Akoya Chatbot Backend is running 🚀",
  });
});

// ===============================
// Chat API
// ===============================
app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    // Check message
    if (!message || typeof message !== "string" || !message.trim()) {
      return res.status(400).json({
        error: "Message is required",
      });
    }

    console.log("📩 User Message:", message);

    // ===============================
    // Gemini Request
    // ===============================
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: message,

      config: {
        systemInstruction:
          "You are Akoya Laundry's helpful customer support assistant. " +
          "Answer questions about laundry services, garment care, prices, delivery, and bookings. " +
          "Be polite, professional, friendly, and concise. " +
          "If you do not know a specific price or policy, ask the customer to contact Akoya support. " +
          "Do not invent prices, policies, services, or information.",
      },
    });

    console.log("✅ Gemini Response Received");

    // ===============================
    // Get Gemini Text
    // ===============================
    const reply = response.text;

    if (!reply) {
      console.error("❌ Gemini returned an empty response");

      return res.status(500).json({
        error: "Gemini returned an empty response",
      });
    }

    console.log("🤖 Bot Reply:", reply);

    // ===============================
    // Send Response to Frontend
    // ===============================
    res.status(200).json({
      reply: reply,
    });

  } catch (error) {
    // ===============================
    // Detailed Error
    // ===============================
    console.error("=================================");
    console.error("❌ GEMINI ERROR");
    console.error("=================================");

    console.error("Message:", error.message);
    console.error("Name:", error.name);
    console.error("Status:", error.status);
    console.error("Code:", error.code);

    console.error("Full Error:", error);

    // Send actual error to frontend
    res.status(500).json({
      error: error.message || "Gemini API error",
    });
  }
});

// ===============================
// Start Server
// ===============================
const PORT = 5000;

app.listen(PORT, () => {
  console.log("=================================");
  console.log("🚀 Akoya Chatbot Backend Started");
  console.log(`🌐 http://localhost:${PORT}`);
  console.log(`💬 Chat API: http://localhost:${PORT}/chat`);
  console.log("=================================");
});