const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

// Load env variables from .env
dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // for parsing application/json

// ✅ Routes
app.use("/api/auth", require("./routes/authRoutes"));   // Register & Login
app.use("/api/todos", require("./routes/todoRoutes"));  // Todo CRUD (optional if added)

// ✅ Default Route (optional)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
