const mongoose = require("mongoose");
const { assign } = require("lodash");

const startupSchema = mongoose.Schema({
  
  review: { type: String, required: true },
 
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
 title: { type: mongoose.Schema.Types.String, ref: "Post", required: true },
  
  
  
 
 

 

});

const Startup = mongoose.model("Startup", startupSchema);

function validatestartup(startup) {
    const schema = {
        review: Joi.string().min(5).max(50).required()
      
      
        
        
       
       
    };
    return Joi.validate(startup, schema);
}

exports.Startup = Startup;
exports.validate = validatestartup;