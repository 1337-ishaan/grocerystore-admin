const express = require("express");
const app = express();
const PORT = 3010;
const mongoose = require("mongoose");
const cors = require("cors");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

var groceryItems = require("./routes/grocery");
var orders = require("./routes/orders");
var payments = require("./routes/payments");
var facebookRouter = require("./routes/facebookAuth");
var addToCart = require("./routes/addToCart");

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
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/groceryItems", groceryItems);
app.use("/api/orders", orders);
app.use("/api/payments", payments);
app.use("/api/addToCart", addToCart);
app.use("/api/facebook-login", facebookRouter);
app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.post("/post-form-data", function (req, res) {
  dbConn.then(function (db) {
    delete req.body._id; // for safety reasons
    db.collection("formData").insertOne(req.body);
  });
  res.send("Data received:\n" + JSON.stringify(req.body));
});

app.get("/view-form-data", function (req, res) {
  dbConn.then(function (db) {
    db.collection("formData")
      .find({})
      .toArray()
      .then(function (formData) {
        res.status(200).json(formData);
      });
  });
});

// listen to PORT
app.listen(PORT, () => console.log(`Server listening on ${PORT}`)); // need to put the PORT to .env

// Frontend --> accha banana hai aur
