const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://aasia:emqlbmpblnimdias@cluster0.1sfxc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("DB Success"))
  .catch((err) => console.error("DB failed:", err));

// Mongoose Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "aasia3017@gmail.com",
    pass: "emql bmpb lnim dias",
  },
});

// POST Route to handle contact form submissions
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Save to MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send Email
    const mailOptions = {
      from: email,
      to: "aasia3017@gmail.com",
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email" });
      }
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Message sent successfully" });
    });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ message: "Failed to save message" });
  }
});

// Start Server
app.listen(PORT, () =>
  console.log(`Server running at ${PORT}`)
);

