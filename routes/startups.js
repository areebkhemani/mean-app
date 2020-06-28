const express = require("express");
const {Post,validate }= require("../models/post");

const {Startup}= require("../models/startup");
const { User } = require("../models/user");
const config = require('config');
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const router = express.Router();
const {Entrepreneurist,Doner} =  require('../middleware/role');


router.post('/:id',[auth,Entrepreneurist],async (req,res) =>{
    const post=await Post.findOne({_id: req.params.id});
    const startup=new Startup({

      review:req.body.review,
      post:req.params.id,
      title:post.title

      
    });
    post.status="done"
   
    await startup.save();
    await post.save();

    
    
    res.send(startup);
   
});

router.get('/',async(req, res)=> {
    Startup.find({
    
      }).exec(function(err, Startup){
        if (err) return res.send(err);
        res.json(Startup);
    });
  });

  module.exports = router;