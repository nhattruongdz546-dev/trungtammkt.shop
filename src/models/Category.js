const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String },
    description: { type: String },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Category', categorySchema);