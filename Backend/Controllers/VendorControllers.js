const express=require("express");
const app = express();
const bcrypt=require('bcrypt');
const vendor=require('../Models/vendors');
const jwt = require('jsonwebtoken');



const SecretKey= "MyJwtNameIsJwt"







const VendorRegister = async(req,res) =>{
const{username,email,password}=req.body;
try {
  const VendorRegisterEmail= await vendor.findOne({email});
  if (VendorRegisterEmail){
    return res.status(400).json("email already taken");
  }

  const HashedPassword= await bcrypt.hash(password,8);

  const NewVendor= new vendor({
    username,
    email,
    password: HashedPassword
  });
await NewVendor.save();
    res.status(201).json({message:"vendor registered successfully"})

    console.log("regeistred")
} catch (error) {
    console.log("error",error)
    res.status(500).json({error:"internal server error"})
   
}

}

const VendorLogin= async(req,res)=>{
  try {
    const validVendor= await vendor.findOne({email:req.body.email});
   if(!validVendor){ return res.status(404).json("invalid user - check your login credentials")
   }
   const validPassword= await bcrypt.compare(req.body.password, validVendor.password)
   if(!validPassword){return res.status(404).json("Invalid password")
   }

   const token = jwt.sign({ vendorId: vendor._id }, SecretKey, { expiresIn: '30d' });

   


   res.status(200).json({Sucess:"Login successfull",token});
  console.log(token)
  } 
  

   catch (error) {
    console.log(error)
    res.status(500).json("Server error");
   }
}

module.exports= {VendorRegister,VendorLogin}
