const userModel = require('../models/user-model');
const ownerModel = require('../models/owner-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {generateToken} = require('../utils/generateToken');
const router = require('../routes');







module.exports.registerUser = async function (req, res) {

    try {
        let { fullname, email, password } = req.body;
           
       let user = await userModel.findOne({email});
       if(user) return res.status(401).send("User already exist");

       


           bcrypt.genSalt(10, function (err, salt) {
   
               bcrypt.hash(password, salt, async function (err, hash) {
   
                   if (err) res.send(err.message)
   
                   else {
   
   
   
                       let user = await userModel.create({
                           fullname,
                           email,
                           password: hash,
                       });
   
   
                   let token = generateToken(user);
                    res.cookie("token", token);
                    res.send("User created successfully");
   
   
                   };
               })
           })
       


    } catch (error) {
        res.send(error.message);
    }

};

module.exports.loginUser = async function (req, res) {
    let{ email, password} = req.body;

   let user = await userModel.findOne({email:email});

   if(!user) return res.send("Email problem");

   bcrypt.compare(password, user.password, function(err, result){
     if(result){
       let token = generateToken(user);
            res.cookie("token",token)
            res.redirect("/shop")

     } else {
        return res.send("password problem");
     }
   });

};

// OWNER LOGIN 

module.exports.registerOwner = async function (req, res) {
    try {
        const { fullname, email, password } = req.body;

        // Check if any owner already exists
        const existingOwner = await ownerModel.findOne();
        if (existingOwner) {
            return res.status(403).send("You don't have permission to create another owner.");
        }

        // Hash password and create owner
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newOwner = await ownerModel.create({
            fullname,
            email,
            password: hashedPassword,
        });

        const token = generateToken(newOwner);
        res.cookie("token", token);
        res.send("Owner created successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};


module.exports.loginOwner = async function (req, res) {
    let{ email, password} = req.body;

   let owner = await ownerModel.findOne({email:email});

   if(!owner) return res.send("Email problem");

   bcrypt.compare(password, owner.password, function(err, result){
     if(result){
       let token = generateToken(owner);
            res.cookie("token",token)
            res.redirect("/owner/admin")

     } else {
        return res.send("password problem");
     }
   });

};