import express, { static as s } from "express";
import { join } from "path";

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(s(join("../", "dist")));

// Send the main HTML file for any other requests
app.get("*", (req, res) => {
  res.sendFile(join("../", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
