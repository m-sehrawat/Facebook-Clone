const express = require("express");
const Profilepic = require("../models/profilePic.model");
const upload = require("../middleware/upload");
const fs = require("fs");

const router = express.Router();

const bodyParser = require("body-parser");

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.post("/:userid", upload.single("mypic"), async (req, res) => {
  // { ye req.file hai
  //   fieldname: 'mypic',
  //   originalname: 'alk.jpg',
  //   encoding: '7bit',
  //   mimetype: 'image/jpeg',
  //   destination: 'E:\\facebook\\Facebook-Clone\\src\\uploadImgs',
  //   filename: 'alk.jpg',
  //   path: 'E:\\facebook\\Facebook-Clone\\src\\uploadImgs\\alk.jpg',
  //   size: 213109
  // }
  console.log(req.body, "I am frm backend");

  try {
    const profpic = await Profilepic.create({
      user_id: req.params.userid,

      img: req.file.filename,
    });

    return res.status(201).send(profpic);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.get("/:userid", async (req, res) => {
  try {
    const profpic = await Profilepic.findOne({ user_id: req.params.userid })
      .lean()
      .exec();
    console.log(profpic);
    return res.status(201).send(profpic);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.delete("/:userid", async (req, res) => {
  try {
    const profpic = await Profilepic.findOneAndDelete({
      user_id: req.params.userid,
    })
      .lean()
      .exec();
    console.log(profpic);
    return res.status(201).send(profpic);
  } catch (e) {
    return res.status(500).json({ status: "failed", message: e.message });
  }
});

router.patch("/:userid", upload.single("mypic"), async (req, res) => {
  console.log(req.body);
  try {
    const profpic = await Profilepic.findOneAndUpdate(
      { user_id: req.params.userid },
      req.body,
      { new: true }
    )
      .lean()
      .exec();
    res.status(201).send(profpic);
  } catch (e) {
    res.status(500).json({ message: e.message, status: "Failed" });
  }
});

module.exports = router;
