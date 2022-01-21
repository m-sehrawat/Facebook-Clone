const User = require("../models/user.model")

const express = require('express');
const upload = require('../middleware/upload')

const router = express.Router();


router.get("/", async (req, res) => {
    try {
        let user = await User.find().lean().exec();

        return res.status(201).json(user);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" })
    }
});


router.get("/:id", async (req, res) => {
    try {
        let user = await User.findById(req.params.id).lean().exec();

        return res.status(201).json(user);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.patch('/:userid', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.userid, req.body, { new: true }).lean().exec();

        return res.status(201).send(user);

    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" });
    }
});


router.delete('/:userid', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.userid).lean().exec();

        res.status(201).send(user);

    } catch (e) {
        res.status(500).json({ message: e.message, status: "Failed" })
    }
});


module.exports = router;