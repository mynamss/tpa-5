const express = require("express");
const app = express();
const allRoutes = require("./routes");
const PORT = process.env.PORT || 3000;

// Akses Middleware
app.use(express.json());
app.use(allRoutes);

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});
