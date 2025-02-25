const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    "Name":{type:String, required:true},
    "City":{type:String, required:true},
    "Items": [String]
});

const RestaurantModel = mongoose.model('Restaurant',RestaurantSchema);

module.exports = RestaurantModel;