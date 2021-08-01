const mongoose = require("mongoose");

const BannerSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    status: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Banner", BannerSchema);
