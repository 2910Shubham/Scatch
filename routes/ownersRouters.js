const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");



if (process.env.NODE_ENV === "development") {
    console.log(process.env.NODE_ENV);
    router.post('/create', async function (req, res) {

        let owner = await ownerModel.find();
        if (owner.length > 0) {
            res.status(403).send("You don't have permission");
        } 
        else {

            let { fullname, email, password } = req.body;
           let createOwner = await ownerModel.create({
               fullname,
               email,
               password,
           });
   
           res.status(201).send(createOwner);


        };
    });

}

router.get('/', function (req, res) {
    res.send("hello, its working");
});




module.exports = router;