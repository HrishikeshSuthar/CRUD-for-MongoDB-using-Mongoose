const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 5000;
const userRoute = require("./routes/userRoute");

app.use(cors({ origin: "http://localhost:3000/", credentials: true }));
app.use(express.json());
app.use("/user", userRoute);

mongoose
  .connect("mongodb://0.0.0.0:27017/crud", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Connection Failed ", err);
  });

app.get("/", (req, res) => {
  res.status(200).json({ Message: "Base URL" });
});

app.listen(PORT, () => {
  console.log(`Server Running on  http://localhost:${PORT}`);
});
