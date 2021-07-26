const express = require("express");
const mongoose = require("mongoose");
const GroceryItem = require("../models/GroceryItem.js");
const multer = require("multer");

var router = express.Router();
// const Storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "../public/uploads");
//   },
//   filename: function (req, file, cb) {
//     console.log(req,file);
//     cb(null, Date.now() + file.originalname);
//   },
// });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    cb(null, fileName);
  },
});

const upload = multer({
  storage: storage,
});

/* GET ALL GroceryItemS */
router.get("/", function (req, res, next) {
  GroceryItem.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE GroceryItem BY ID */
router.get("/:id", function (req, res, next) {
  GroceryItem.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE GroceryItem */
router.post("/", upload.single("file"), function (req, res, next) {

  console.log(req.body, "Creating new entry");
  GroceryItem.create(
    { ...req.body, image: req.file.name },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* UPDATE GroceryItem */
router.put("/:id", function (req, res, next) {
  GroceryItem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE GroceryItem */
router.delete("/:id", function (req, res, next) {
  GroceryItem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
