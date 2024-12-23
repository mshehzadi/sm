import mongoose from "mongoose";

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true, // Ensure name is required
    },
    email: {
      type: String,
      required: true, // Ensure email is required
      unique: true, // Ensure email is unique
    },
    password: {
      type: String,
      required: true, // Ensure password is required
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
    collection: "cluster", // Explicitly specify the collection name (cluster in this case)
  }
);

// Create the user model from the schema
const User = mongoose.model("User", userSchema);

// Export the User model
export default User;



