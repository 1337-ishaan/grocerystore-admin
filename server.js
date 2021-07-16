const express = require("express");
const app = express();
const PORT = 3010;
const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(
      "mongodb+srv://1337_ishaan:Ishaan@2000@cluster0.3yrtx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    )
    .then(() => console.log("Connected Successfully"))
    .catch((err) => console.error("Not Connected"));
};

//connecting the database
connectDB();


// listen to PORT
app.listen(PORT, () => console.log(`Server listening on ${PORT}`)); // need to put the PORT to .env
