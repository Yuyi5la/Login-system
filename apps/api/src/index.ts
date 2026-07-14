import express from "express";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRoutes";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Hello from Express + TypeScript backend " });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
