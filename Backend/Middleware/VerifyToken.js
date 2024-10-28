const Vendor= require('../Models/vendors')
const jwt = require('jsonwebtoken');


const SecretKey = "MyJwtNameIsJwt"; 



const verifyToken= async(req,res,next)=>{
const token = req.headers.token//(this meanse we will send token in header)
console.log(token)
if (!token)
    return res.status(401).json({error:"Token is requried"})
try {
    
    const decoded = jwt.verify(token, SecretKey);
    console.log(decoded.vendorID, "Vendor ID from decoded token");
const vendor = await Vendor.findById(decoded.vendorID)
console.log(vendor)
if (!vendor){
   return res.status(404).json(decoded);
}

req.vendorID= vendor._id
next()
} catch (error) {
    console.log(error)
return res.status(500).json({error:"Invalid Token error"});
}
}

module.exports= verifyToken