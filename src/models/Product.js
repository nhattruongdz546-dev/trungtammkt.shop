const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    discount_price: { type: Number },
    description: { type: String },
    short_description: { type: String },
    thumbnail: { type: String },
    images: [{ type: String }],
    tags: [{ type: String }],
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    total_quantity: { type: Number, required: true },
    sold_quantity: { type: Number, default: 0 },
    remaining_quantity: { type: Number, default: function() { return this.total_quantity - this.sold_quantity; } },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);