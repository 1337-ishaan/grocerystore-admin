const express = require("express");
const mongoose = require("mongoose");
const FormUsers = require("../models/FormUsers");

var router = express.Router();

/* GET ALL GroceryItemS */
router.get("/", function (req, res, next) {
  FormUsers.find(function (err, data) {
    if (err) return next(err);
    res.json(data);
  });
});

/* GET SINGLE Form data BY ID */
router.get("/:id", function (req, res, next) {
  FormUsers.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE GroceryItem */
router.post("/", function (req, res, next) {
  console.log(req.body, "Creating new entry");
  FormUsers.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE GroceryItem */
// router.put("/:id", function (req, res, next) {
//   FormUsers.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

// /* DELETE GroceryItem */
// router.delete("/:id", function (req, res, next) {
//   FormUsers.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
