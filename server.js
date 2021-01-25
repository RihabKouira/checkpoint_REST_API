const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
require("dotenv").config({ path: "./config/.env" });
const mongoUrl = process.env.MONGO_URL;
/* connect DB to server */
mongoose.connect(
  mongoUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    else console.log("DB is connected");
  }
);
app.use("/users", require("./routes/usersRoutes"));
/* create server */
app.listen(5000, (err) => {
  if (err) console.log(err);
  else console.log("Server running on port 5000");
});
