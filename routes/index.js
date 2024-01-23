var express = require('express');
var router = express.Router();
const productModule = require("../model/productModule");

// multer code
const multer = require("multer");

const storage = multer.diskStorage({
  destination:function(req,file,cb){
    cb(null,"public/upload")
  },
  filename:function(req,file,cb){
    cb(null,file.originalname)
  }
})
const upload = multer({storage:storage})


/* GET home page. */

router.get('/admin', function(req, res, next) {
  res.render('admin');
});

router.get('/', function(req, res, next) {
  res.send('server start');
});


router.get('/admin/pages/edit-pages',(req,res)=>{
  res.render('editPage')
})

router.get('/admin/pages',async(req,res)=>{
 const allData = await productModule.find({})
  res.render('pages',{data:allData})
})

router.get('/admin/pages/add-pages', function(req, res, next) {
  res.render('addPage');
});

router.get('/admin/pages/edit-pages', function(req, res, next) {
  res.render('editPage');
});

// -----withaut photo data ko stor karne ke liye-----
/*
router.post('/admin/pages/add-pages', async(req, res)=> {
  try {
    const creatPostUser = await productModule.create({
      Page_Url:req.body.Page_Url,
      Page_Meta_Description:req.body.Page_Meta_Description,
      Page_Meta_Keyword:req.body.Page_Meta_Keyword,
      Page_Heading:req.body.Page_Heading,
      // Page_Photo:req.body.Page_Photo,
      Page_Details:req.body.Page_Details,
    })
    res.redirect('/admin/pages');
    console.log(creatPostUser)
  } catch (error) {
    console.log("ERROR-->",error);
  }
});
*/


// ----photo ke sath data ko store karne ke liye----
router.post('/admin/pages/add-pages',upload.single('Page_Photo'), async(req, res)=> {
  try {
    const creatPostUser = await productModule.create({
      Page_Url:req.body.Page_Url,
      Page_Meta_Description:req.body.Page_Meta_Description,
      Page_Meta_Keyword:req.body.Page_Meta_Keyword,
      Page_Heading:req.body.Page_Heading,
      Page_Photo:req.file.filename,
      Page_Details:req.body.Page_Details,
    })
    res.redirect('/admin/pages');
    // console.log(creatPostUser)
  } catch (error) {
    console.log("ERROR-->",error);
  }
});

// ------------find karne ke liye demo ------------
// router.get("/find",async(req,res)=>{
//   const findOneUser = await addModel.findOne()
//   console.log(findOneUser)
// })



module.exports = router;
