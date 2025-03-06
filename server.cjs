const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3100;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, "dist")));

// Send the main HTML file for any other requests
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
