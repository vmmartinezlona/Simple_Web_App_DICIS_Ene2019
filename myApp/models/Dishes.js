//  For ODM: object data modeling
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dishSchema = new Schema({
    Id: String,
	Name: String,
	Description: String,
    Price: String,
    Category: String
});

module.exports = mongoose.model('dish', dishSchema);