const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");
const ownerModel = require('../models/owner-model');

module.exports = async function ( req,res, next){

    if(!req.cookies.token){
        req.flash("error", "you need to loggin first");
        return res.redirect("/");
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await userModel
        .findOne({email: decoded.email})
        .select("-password");
        req.user = user;
        next();
    } catch (err){
        req.flash("error", "sommething went wrong.");
        res.redirect("/");
    }

};