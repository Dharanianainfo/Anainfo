const Admin = require('./model/adminmodel');
const bcryptjs = require('bcryptjs');
const auth = require('./auth');
var async = require('async');
const errors = require('./error')


async function adminLogin({ email, password }, callback) {
    const admin = await Admin.findOne({
        $or: [{
          "email": email
        }, {
          "phoneNumber": email
        },]
      });
      console.log(admin)

    if (admin != null ) {
        console.log(admin.password)
        console.log(password)
        if (bcryptjs.compareSync(password,admin.password)) {
                    const token = auth.generateAccessToken(admin.email);
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

module.exports = { 
    adminLogin
}