const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    "Name":{type:String, required:true},
    "Price":{type:Number, required:true}
});

const ItemModel = mongoose.model("ItemModel",ItemSchema);