const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/toDoroutes");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.port || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log(`Connected to database`);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(PORT, () => {
  console.log(`server running on ${PORT}...`);
});
