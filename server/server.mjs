import express, { static as static_ } from "express";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

import compression from "compression";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000;

app.use(compression({ level: 8 }));

// Serve static files from the dist directory
app.use(
  static_(join(__dirname, "../", "dist"), {
    maxAge: 36000,
  })
);
// Serve static files from the dist directory
app.use(
  static_(join(__dirname, "../", "public"), {
    maxAge: 36000,
  })
);

// Send the main HTML file for any other requests
app.get("/", (req, res) => {
  try {
    return res
      .status(200)
      .sendFile(join(__dirname, "../", "dist", "index.html"), {
        maxAge: 36000,
      });
  } catch (error) {
    console.warn(error);
    next(error);
  }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.warn("404 handler called for", req.url);
  const error = new Error("Not Found");
  error.status = 404;
  next(error); // Pass the error to the next middleware
});

// Error handler
app.use(function (err, req, res, next) {
  console.error("Error handler called:", err.message); // Log the error

  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // Render the error page (or send JSON)
  res.status(err.status || 500); // Set the status code

  //Check if the client accepts HTML
  if (req.accepts("html")) {
    res.sendFile(join(__dirname, "error.html")); // Serve the error page
  } else {
    // Respond with JSON if the client requested JSON
    res.json({ error: { message: err.message, status: err.status || 500 } });
  }
});

app.listen(port, () => {
  // console.log(process.env.PORT);
  console.log(`Server is running on port ${port}`);
});
