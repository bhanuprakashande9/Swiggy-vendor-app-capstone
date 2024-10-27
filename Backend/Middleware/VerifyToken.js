const Vendor= require('../Models/vendors')
const jwt = require('jsonwebtoken');


const SecretKey = "MyJwtNameIsJwt"; 



const verifyToken= async(req,res,next)=>{
const token = req.headers.token//(this meanse we will send token in header)
if (!token)
    return res.status(401).json({error:"Token is requried"})
try {
    
const decoded = jwt.verify(token, SecretKey)
const vendor = await Vendor.findById(decoded.vendorID)

if (!vendor){
   return res.status(404).json({error:"Vendor not found -Token"});
}

req.vendorID= vendor._id
next()
} catch (error) {
    console.log(error)
return res.status(500).json({error:"Invalid Token error"});
}
}

module.exports= verifyToken