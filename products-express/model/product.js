const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ProductSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: String,
    price: Number,
    stock: Number,
    desc: String,
});

module.exports = Mongoose.model("Product", ProductSchema);
