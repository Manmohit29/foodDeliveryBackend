const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const mongoDB = require("./db");
const cors = require("cors");
app.use(express.json());
app.use(cors());

mongoDB();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/foodRoutes"));
app.use("/api", require("./routes/orderRoutes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
