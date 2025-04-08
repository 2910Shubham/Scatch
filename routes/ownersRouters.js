const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");
const productModel = require('../models/product-models');
const { registerOwner, loginOwner } = require('../controllers/authController');
const { closeDelimiter } = require('ejs');



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

router.get('/admin', function (req, res) {
  let success = req.flash("success")
    res.render("createproducts" , {success});
});

router.get('/allProduct', async function (req, res) {
    try {
        const allProducts = await productModel.find().select('-image');
        console.log("Sending", allProducts.length, "products");
        res.status(200).send(allProducts);
    } catch (error) {
        console.error("Fetch failed:", error);
        res.status(500).send({ error: "Failed to fetch products" });
    }
});

router.post('/register', registerOwner );

router.post("/login", loginOwner );




module.exports = router;