const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const scrapeRoutes = require("./routes/scrapeRoutes");
const scrapeStories = require("./services/scraperService");
const storyRoutes = require("./routes/storyRoutes");


const connectDB = require("./config/db");

dotenv.config();

connectDB();
scrapeStories();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/scrape", scrapeRoutes);
app.use("/api/stories", storyRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});