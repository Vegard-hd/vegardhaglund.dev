import express, { static as s } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(s(join(__dirname, "../", "dist")));

// Send the main HTML file for any other requests
app.get("*", (req, res) => {
  res.sendFile(join("../", "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
