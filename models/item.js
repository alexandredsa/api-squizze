var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0
    }
}, {
    versionKey: false
});

var Item = mongoose.model('items', itemSchema);

module.exports = Item;