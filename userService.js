const Admin = require('./model/adminmodel');
const bcryptjs = require('bcryptjs');
const auth = require('./auth');
var async = require('async');
const errors = require('./error');
const User = require('./model/user_model');


async function adminLogin({ email, password }, callback) {
    const admin = await Admin.findOne({"email": email });
      console.log(admin)

    if (admin != null ) {
        console.log(admin.password)
        console.log(password)
        if (bcryptjs.compareSync(password,admin.password)) {
                    const token = auth.generateAccessToken(admin._id);
                    console.log("user")
                    return callback(null, { ...admin.toJSON(), token });
                }
                else {
                    return callback({
                        message: "Invalid password",
                    });
                }

    }
    else {
        return callback({
            message: "Invalid username",
        });
    }

}

async function userLogin({ email, password }, callback) {
    const user = await User.findOne({"email": email});
    if (user != null ) {
       
        if (bcryptjs.compareSync(password, user.password)) {
                    const token = auth.generateAccessToken(user._id);
                    console.log("user")
                    return callback(null, { ...user.toJSON(), token });
                }
                else {
                    return callback({
                        message: "Invalid password",
                    });
                }

    }
    else {
        return callback({
            message: "Invalid username",
        });
    }

}

module.exports = { 
    adminLogin,
    userLogin
}