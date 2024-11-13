//pass=eKwASCHzdQ92KgOP
const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoutes");

const app = express();

app.use(express.json());
app.use("/users",router);

mongoose.connect("mongodb+srv://admin:eKwASCHzdQ92KgOP@cluster0.md3oc.mongodb.net/")
.then(() => console.log("connected to mongodb"))
.then(() => {
  app.listen(5000);
})
.catch((err) => console.log((err)));
