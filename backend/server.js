import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Import the user routes
import userRoutes from './routes/user.routes.js';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies in requests

// MongoDB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully.");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process with failure
  }
};

// Call the MongoDB connection function
connectDB();

// Routes
app.use('/api/auth', userRoutes); // All routes in user.routes.js prefixed with /api/auth

// Root Endpoint
app.get('/', (req, res) => {
  res.send("🚀 Server is running! Use '/api/auth' for API routes.");
});

// Handle Undefined Routes
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found." });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error("❌ An error occurred:", err.message);
  res.status(500).json({ message: "Internal server error." });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});


