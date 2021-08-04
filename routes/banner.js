const express = require("express");

const router = express.Router();
const Banner = require("../models/Banner");
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
  Banner.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

router.post("/", upload.single("image"), function (req, res, next) {
  Banner.create({ ...req.body, image: req.file.path }, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});
router.put("/:id", function (req, res, next) {
  Banner.findByIdAndUpdate(
    req.params.id,
    { ...req.body },
    function (err, post) {
      if (err) return next(err);
      res.json(post);
    }
  );
});

router.delete("/:id", function (req, res, next) {
  Banner.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
