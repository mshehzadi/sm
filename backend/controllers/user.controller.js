import User from "../models/user.model.js";
import bcryptjs from "bcryptjs"; // For password hashing
import jwt from "jsonwebtoken"; // For creating tokens

// Signup Controller
export const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Signup successful! You can now log in.", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during signup. Please try again.", error: error.message });
  }
};

// Login Controller
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found. Please sign up first." });
    }

    // Compare passwords
    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials. Please try again." });
    }

    // Generate a token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Use the environment variable for JWT secret
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful!", token, user: { name: user.name, email: user.email } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error during login. Please try again.", error: error.message });
  }
};
