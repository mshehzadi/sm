import express from "express";
import { signup, signin } from "../controllers/user.controller.js"; // Import controller functions

const router = express.Router();

// POST request for user signup
router.post("/signup", async (req, res) => {
    try {
        console.log("Signup route accessed"); // Log to confirm route is hit
        await signup(req, res); // Call the signup controller function
    } catch (error) {
        console.error("Error in /signup route:", error.message);
        res.status(500).json({ message: "Internal server error during signup." });
    }
});

// POST request for user signin
router.post("/signin", async (req, res) => {
    try {
        console.log("Signin route accessed"); // Log to confirm route is hit
        await signin(req, res); // Call the signin controller function
    } catch (error) {
        console.error("Error in /signin route:", error.message);
        res.status(500).json({ message: "Internal server error during signin." });
    }
});

export default router;


