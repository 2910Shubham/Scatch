const express =require("express");
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");
const productModels = require("../models/product-models");
const userModel = require("../models/user-model");


router.get("/", function (req, res){
  let error = req.flash("error");
  res.render("index",{error});
});

router.get("/cart", isLoggedin, async function (req, res){
 let user =  await userModel.findOne({email: req.user.email})
  .populate("cart");
  
  let cartTotal = 0;
  const netTotals = [];
  
  // Calculate net total for each product and overall cart total
  for (let i = 0; i < user.cart.length; i++) {
    const product = user.cart[i];
    const netTotal = Number(product.price) + 20 - Number(product.discount);
    netTotals[i] = netTotal; // Store net total by index
    cartTotal += netTotal;
  }

 let cartCount= user.cart.length;

 

  res.render("cart", { user, cartTotal,  netTotal: netTotals, cartCount});
});

router.get("/shop", isLoggedin, async function(req,res){
  let products = await productModels.find();
  let success = req.flash("success");
  res.render("shop", {products, success});
});



router.get("/addtocart/:productid", isLoggedin ,async function (req, res){
  
   let user = await userModel.findOne({email: req.user.email});
   user.cart.push(req.params.productid);
   await user.save();
   req.flash("success", "product added to cart");
   res.redirect("/shop");

});

router.get("/removefromcart/:productid", isLoggedin, async function (req, res) {
  try {
    let user = await userModel.findOne({ email: req.user.email });

    // Remove the product from the cart array
    user.cart = user.cart.filter(item => item.toString() !== req.params.productid);
    
    await user.save();

    req.flash("success", "Product removed from cart");
    res.redirect("/cart");
  } catch (err) {
    console.error(err);
    req.flash("error", "Something went wrong");
    res.redirect("/cart");
  }
});


module.exports = router;
