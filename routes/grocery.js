const express = require("express");
const GroceryItem = require("../models/GroceryItem.js");
var router = express.Router();
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = `./uploads/`;
    fs.mkdirSync(path, { recursive: true });
    return cb(null, path);
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, "") + file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
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
  GroceryItem.create({ ...req.body }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE GroceryItem */
router.put("/:id", upload.single("file"), function (req, res, next) {
  console.log(req.file);
  GroceryItem.findByIdAndUpdate(
    req.params.id,
    req.file.path,
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

/* DELETE GroceryItem */
router.delete("/:id", function (req, res, next) {
  GroceryItem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
