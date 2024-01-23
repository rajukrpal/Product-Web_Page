const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Page_Url:String,
    Page_Meta_Description:String,
    Page_Meta_Keyword:String,
    Page_Heading:String,
    Page_Photo:String,
    Page_Details:String
},{timestamps:true});

module.exports = mongoose.model('productlist',productSchema);