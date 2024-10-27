const express=require('express')
const router=express.Router();
const VendorControllers=require('../Controllers/VendorControllers')

router.post('/Vendorregistration',VendorControllers.VendorRegister);
//(Vendor Registration API link- localhost:2000/api/Vendor/Vendorregistration')

router.post('/VendorLogin',VendorControllers.VendorLogin);
//(Vendor Registration API link- localhost:2000/api/Vendor/VendorLogin')
module.exports=router;