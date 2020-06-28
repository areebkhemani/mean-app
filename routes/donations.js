const config = require('config');
const jwt = require("jsonwebtoken");
const express = require('express');
const {User, validate} = require('../models/user');
const {Donation} = require('../models/donation');
const router = express.Router();
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {Entrepreneurist,Doner} =  require('../middleware/role');

const auth = require('../middleware/auth');

router.get('/:id',async(req, res)=> {
    Donation.find({
        post: req.params.id
      }).exec(function(err, Donation){
        if (err) return res.send(err);
        res.send(Donation);
    });
});


router.get('/',[auth,Doner],async(req, res)=> {
    Donation.find({
    email: req.userdata.email
      }).exec(function(err, Donation){
        if (err) return res.send(err);
        res.send(Donation);
    });
});
module.exports = router;