const express = require("express");
const dotenv = require("dotenv");

const { default: mongoose } = require("mongoose");
dotenv.config({ path: "./config.env" });

const studentRouter = require("./routes/studentRoutes");
const classRouter = require("./routes/classRoutes");
const parentRouter = require("./routes/parentRoutes");

const app = express();

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB)
  .then((data) => {
    console.log("Successfully connected to database");
  })
  .catch((err) => console.log("Error connected to database: ", err));
app.use(express.json());
app.use("/api/students", studentRouter);
app.use("/api/classes", classRouter);
app.use("/api/parents", parentRouter);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
