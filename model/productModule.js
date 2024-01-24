const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    Page_Url:{
        type:String,
        // required:true,
    },
    Page_Meta_Description:{
        type:String,
        // required:true,
    },
    Page_Meta_Keyword:{
        type:String,
        // required:true,
    },
    Page_Heading:{
        type:String,
        // required:true,
    },
    Page_Photo:{
        type:String,
        // required:true,
    },
    Page_Details:{
        type:String,
        // required:true,
    },
},{timestamps:true});

module.exports = mongoose.model('productlist',productSchema);