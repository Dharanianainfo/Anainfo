const express = require("express")
const mongoose = require('mongoose');
const app = express();
const {unless} = require('express-unless')
const dbConfig = require('./db.config');
const auth = require('./auth');
const errors = require('./error')
const cors=require("cors");
// const dd = require('./user_controller');
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('We are at home')
});

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
    console.log('server is started', PORT);
});

app.use("/users", require('./Routes/user.routes'));
app.get('/users',(req, res) => {
  res.send('We are at home')
  });

auth.authenticateToken.unless = unless;
app.use(
    auth.authenticateToken.unless({
        path: [
            { url: "/users/anaRegister", methods: ["POST"] },
            { url: "/users/BitzfunRegister", methods: ["POST"] },
            { url: "/users/BlockzpubRegister", methods: ["POST"] },
            { url: "/users/anaadminRegister", methods: ["POST"] },
            { url: "/users/adminRegister", methods: ["POST"] },
            { url: "/users/adminLogin", methods: ["POST"] },
            { url: "/users//getoneUser/:_id", methods: ["GET"] },
            { url: "/users/getallUser", methods: ["GET"] },
            { url: "/users/getUser", methods: ["GET"] },
            { url: "/users/deleteUser/:_id", methods: ["GET"] },
            
        ],
    })
);





app.use(errors.errorHandler);



mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(
    () => {
        console.log('Database Connected');
    },
    (error) => {
        console.log('Database can`t be connected' + error);
    }
);