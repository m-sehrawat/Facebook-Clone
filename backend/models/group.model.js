const { Schema, model } = require("mongoose")

const groupSchema = Schema({
    title: { type: String, required: true },
    src: { type: String, required: false },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('group', groupSchema)