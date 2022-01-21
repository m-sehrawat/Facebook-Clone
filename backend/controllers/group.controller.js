const express = require("express");
const Group = require("../models/group.model")
const { getAll, post } = require("../controllers/crud.controller")

const router = express.Router();

router.get('/', getAll(Group));

router.post('/', post(Group));

module.exports = router;