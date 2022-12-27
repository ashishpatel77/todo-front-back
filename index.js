const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users-routes");
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());
app.use("/users", router);

mongoose
  .connect(
    "mongodb+srv://viraj1699:4hbblg8cTKS2xfur@cluster0.6dxiofp.mongodb.net/test"
  )
  .then(() => {
    console.log("successfully connected");
  })
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
