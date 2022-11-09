const bcryptjs = require('bcryptjs');
const User = require('./model/user_model');
const Admin = require('./model/adminmodel');
const userService = require('./userService')
const error = require('./error')


exports.anaRegister = async (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email
    
    const contactNumber = req.body.contactNumber
    const countryCode = req.body.countryCode
    const telegramId = req.body.telegramId
    const whatsappNumber = req.body.whatsappNumber
    const skypeId = req.body.skypeId
    const projectDescription = req.body.projectDescription
    const password1 =req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(password1, salt);
    const confirm_pass = req.body.password1
    const status = req.body.status
    

    try {

        console.log("try function")
        const userType = "From_Anatech"
        
        const user = await User.create({ fullName, email, contactNumber, countryCode, telegramId, whatsappNumber, skypeId, projectDescription, userType, status,password,confirm_pass });
        // req.files.forEach((e) => {
        //     let img=e.filename
        //     rider.path.push(img)

        //      });
        //  rider.save()

        return res.status(201).send(user);


    } catch (error) {
        console.log(error);
        return next(error);
        res.status(500).send("something went wrong");
    }

};

exports.BitzfunRegister = async (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email
    
    const contactNumber = req.body.contactNumber
    const countryCode = req.body.countryCode
    const telegramId = req.body.telegramId
    const whatsappNumber = req.body.whatsappNumber
    const skypeId = req.body.skypeId
    const projectDescription = req.body.projectDescription
    const password1 =req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(password1, salt);
    const confirm_pass = req.body.password1
    const status = req.body.status
    

    try {

        console.log("try function")
        const userType = "From_Bitzfun"
        
        const user = await User.create({ fullName, email, contactNumber, countryCode, telegramId, whatsappNumber, skypeId, projectDescription, userType, status,password,confirm_pass });
      

        return res.status(201).send(user);


    } catch (error) {
        console.log(error);
        return next(error);
        res.status(500).send("something went wrong");
    }

};

exports.BlockzpubRegister = async (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email
    
    const contactNumber = req.body.contactNumber
    const countryCode = req.body.countryCode
    const telegramId = req.body.telegramId
    const whatsappNumber = req.body.whatsappNumber
    const skypeId = req.body.skypeId
    const projectDescription = req.body.projectDescription
    const password1 =req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(password1, salt);
    const confirm_pass = req.body.password1
    const status = req.body.status
    

    try {

        console.log("try function")
        const userType = "From_Blockzpub"
        
        const user = await User.create({ fullName, email, contactNumber, countryCode, telegramId, whatsappNumber, skypeId, projectDescription, userType, status,password,confirm_pass });
      

        return res.status(201).send(user);


    } catch (error) {
        console.log(error);
        return next(error);
        res.status(500).send("something went wrong");
    }

};

exports.anaadminRegister = async (req, res, next) => {

    const fullName = req.body.fullName
    const email = req.body.email
    
    const contactNumber = req.body.contactNumber
    const countryCode = req.body.countryCode
    const telegramId = req.body.telegramId
    const whatsappNumber = req.body.whatsappNumber
    const skypeId = req.body.skypeId
    const projectDescription = req.body.projectDescription
    const password1 =req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(password1, salt);
    const confirm_pass = req.body.password1
    const status = req.body.status
    

    try {

        console.log("try function")
        const userType = "From_AnatechAdmin"
        
        const user = await User.create({ fullName, email, contactNumber, countryCode, telegramId, whatsappNumber, skypeId, projectDescription, userType, status,password,confirm_pass });
   

        return res.status(201).send(user);


    } catch (error) {
        console.log(error);
        return next(error);
        res.status(500).send("something went wrong");
    }

};

exports.adminLogin = (req, res, next) => {
    const { email, password } = req.body;
    userService.adminLogin({ email, password }, (error, result) => {
        if (error) {
             return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: result,
        });
    });
};

exports.userLogin = (req, res, next) => {
    const { email, password } = req.body;
    userService.userLogin({ email, password }, (error, result) => {
        if (error) {
             return next(error);
        }
        return res.status(200).send({
            message: "Success",
            data: result,
        });
    });
};


exports.adminRegister = async(req,res,next) => {
    const email = req.body.email;
    const password1 =req.body.password;
    const salt = bcryptjs.genSaltSync(10);
    const password = bcryptjs.hashSync(password1, salt);
    
    try{
  var admin= await Admin.create({email,password})
  return  res.status(200).send(admin)
    }catch(error){
        res.status(500).send("something went wrong"); 
console.log("error")
    }
 }

 exports.getallUser = async (req, res, next) => {
    console.log("all");
    try {
        const user = await User.find()
        console.log(user)
        res.json({ data: user })
    } catch (error) {
        console.log("error")
        res.json(error)
    }
};


exports.getbitzfunUser = async (req, res, next) => {
    console.log("all");
    try {
        const user = await User.find({ userType: 'From_Bitzfun' })
        console.log(user)
        res.json({ data: user,length:user.length })
    } catch (error) {
        console.log("error")
        res.json(error)
    }
};

exports.getblockUser = async (req, res, next) => {
    console.log("all");
    try {
        const user = await User.find({ userType: 'From_Blockzpub' })
        console.log(user)
        res.json({ data: user,length:user.length })
    } catch (error) {
        console.log("error")
        res.json(error)
    }
};
exports.getanatechUser = async (req, res, next) => {
    console.log("all");
    try {
        const user = await User.find({ userType: 'From_Anatech' })
        console.log(user)
        res.json({ data: user,length:user.length })
    } catch (error) {
        console.log("error")
        res.json(error)
    }
};
exports.getadminUser = async (req, res, next) => {
    console.log("all");
    try {
        const user = await User.find({ userType: 'From_AnatechAdmin' })
        console.log(user)
        res.json({ data: user,length:user.length })
    } catch (error) {
        console.log("error")
        res.json(error)
    }
};
exports.getoneUser = async (req, res, next) => {
    console.log("one");
    try {
        const { _id } = req.params
        const individualuser = await User.findOne({ _id: _id });

        res.status(200).json({ success: true, data: individualuser })
        console.log(_id)
    } catch (err) {

        res.status(400).json({ success: false })

    }

}

exports.getUser = async (req, res, next) => {
    console.log("one");
    try {
        const userType = req.body.userType
        const individualuser = await User.findOne({ userType: userType });

        res.status(200).json({ success: true, data: individualuser })
        
    } catch (err) {

        res.status(400).json({ success: false })

    }

}

exports.deleteUser = async (req, res) => {
    console.log("one");
    try {
        const { _id } = req.params
        const individualuser = await User.findOneAndDelete({ _id: _id });

        res.status(200).json({ success: true, data: individualuser })
        
    } catch (error) {
console.log(error)
        return next(error);

    }

}


