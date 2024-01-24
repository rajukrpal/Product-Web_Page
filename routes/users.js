var express = require('express');
var router = express.Router();
const productModule = require("../model/productModule");
/* GET users listing. */
// router.get('/', async(req, res)=> {
//   const userLength = await productModule.find({}).count()
//   res.render('admin',{userLength});
//   console.log(userLength)
// });

module.exports = router;
