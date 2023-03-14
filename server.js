require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongooes = require("mongoose");
const userRoute = require("./routes/userRoute");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//endpoint
app.use("/api/user", userRoute);

//port
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "hello!" });
});

//connect to db
mongooes
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, (req, res) => {
      console.log(`server runing on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
