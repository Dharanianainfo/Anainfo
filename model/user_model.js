const mongoose = require('mongoose');
const { Schema } = mongoose;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema({

  fullName:{
    type:String,
    required:true,
  },

email: {
    type: String,
    required: true,
    unique: true,
},


contactNumber:{
    type: Number,
    required: true,
},

countryCode:{
    type: Number,
    required: true,
},

telegramId:{
    type: String,
    required: true,
},

whatsappNumber:{
    type: Number,
    required: true,
},

skypeId:{
    type: String,
    required: true,
},
projectDescription:{
    type: String,
    required: true,
},
password: {
    type: String,
    required:true,
  },
  confirm_pass: {
    type: String,
    required:true,
  },
userType: {
    type: String,
    enum : ['From_Anatech','From_Bitzfun','From_Blockzpub','From_AnatechAdmin'],
   
},

status: {
    type: String,
    enum : ['open','moved_to_BO','moved_to_DA','SuccessFul'],
    default: 'open'
},
},
{
    timestamps: true,
  }
);

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject._v;
        delete returnedObject.password;
    },
});

userSchema.plugin(uniqueValidator, {message: "Email aldready in use."});

const User = mongoose.model("user", userSchema);

module.exports = User;