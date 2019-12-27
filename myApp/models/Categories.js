var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    Id: String,
    Name: String
});

module.exports = mongoose.model('category', categorySchema);