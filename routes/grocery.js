var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var GroceryItem = require("../models/GroceryItem.js");

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
router.post("/", function (req, res, next) {
  console.log(req.body, "Creating new entry");
  GroceryItem.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
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
