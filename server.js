// server.js (paste into project root)
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/", (req, res) => res.send("Server is running"));

app.use("/user", require("./routes/userRoutes"));
app.use("/payment", require("./routes/paymentRoutes"));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
