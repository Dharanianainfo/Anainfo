const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdminSchema = mongoose.Schema(

  {
   
      email: {
        type: String, default:"admin54@gmail.com"
      },
      password: {
        type: String, default: "12345678"
      },
      name: { type: String },
      profile_pic: { type: String },
    
  },
    {
        timestamps: true,
      }
    );

    
    const AdminModel = mongoose.model("admin", AdminSchema);
    module.exports = AdminModel;
