const mongoose = require("mongoose");
const { assign } = require("lodash");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
 
  creator: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  creatorname: { type: mongoose.Schema.Types.String, ref: "User", required: true },
  
  
 
  donation: [{ type: mongoose.Schema.Types.ObjectId, ref: "Donation",}],
  status:{
    type:String,
    default:'donate'
  }
 

 

});

const Post = mongoose.model("Post", postSchema);

function validatepost(user) {
    const schema = {
        title: Joi.string().min(5).max(50).required(),
        content: Joi.string().min(5).max(255).required(),
      
        
        
       
       
    };
    return Joi.validate(user, schema);
}

exports.Post = Post;
exports.validate = validatepost;