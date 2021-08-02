const express = require("express");

const router = express.Router();
const Catagory = require("../models/Catagories");
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

router.get("/", function (req, res, next) {
  Catagory.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post("/", upload.single("image"), function (req, res, next) {
  Catagory.create({ ...req.body, image: req.file.path }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put("/:id", upload.single("image"), function (req, res, next) {
  console.log(req.file);
  Catagory.findByIdAndUpdate(
    req.params.id,
    { ...req.body, image: req.file.path },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

router.delete("/:id", function (req, res, next) {
  Catagory.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
