const express = require("express");
const {Post,validate }= require("../models/post");
const {Donation,validatedonation}= require("../models/donation");
const { User } = require("../models/user");
const config = require('config');
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const router = express.Router();
const {Entrepreneurist,Doner} =  require('../middleware/role');


router.post('/',[auth,Entrepreneurist], (req, res, next) => {
  
      const post = new Post({
        title: req.body.title,
        content: req.body.content,
        
        creator:req.userdata._id,
        creatorname:req.userdata.name
       
        
       
      });
      post.save().then(createdPost => {
        res.status(201).json({
          message: "Post added successfully",
          post: {
            ...createdPost,
            id: createdPost._id
          }
        });
      });
    }
  );


  router.get('/Myposts', [auth,Entrepreneurist],async(req, res)=> {
    Post.find({
      creator: req.userdata._id
      }).exec(function(err, Post){
        if (err) return res.send(err);
        res.json(Post);
    });
});

router.get('/', [auth,Doner],async(req, res)=> {
  Post.find({
  status:'donate'
    }).exec(function(err, Post){
      if (err) return res.send(err);
      res.json(Post);
  });
});


  
  router.post("/:id/donation",[auth],async (req,res) =>{
      const post=await Post.findOne({_id: req.params.id});
      const donation=new Donation({

        visa:req.body.visa,
        amount:req.body.amount,
        review:req.body.review,
        post:req.params.id,
        posttitle:post.title,
        creator:req.userdata.name,
        email:req.userdata.email
      });
     
      await donation.save();

      post.donation.push(donation._id)
      await post.save();
      res.send(donation);
     
  });

 



  module.exports = router;

