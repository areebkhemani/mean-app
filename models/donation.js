const mongoose = require("mongoose");

const donationSchema = mongoose.Schema({
 
  visa: { type: String, required:true },
  amount: { type: String, required:true },
  review: { type: String, required:true },
  post:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Post',
      required:"post is required feild"

  },

  posttitle:{
    type:mongoose.Schema.Types.String,
    ref:'Post',
    required:"post is required feild"

},
  creator:{
    type:mongoose.Schema.Types.String,
    ref:'User',
    required:true

},

email:{
    type:mongoose.Schema.Types.String,
    ref:'User',
    required:true

}
  
 

});

const Donation = mongoose.model("Donation", donationSchema);

function validatedonation(donation) {
    const schema = {
        
      visa: Joi.string().min(5).max(255).required(),
      amount: Joi.string().min(5).max(255).required(),
    review: Joi.string().min(5).max(255).required()
       
       
    };
    return Joi.validate(donation, schema);
}


exports.Donation =Donation ;
exports.validate = validatedonation;