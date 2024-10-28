const firm=require('../Models/firm');
const Vendor=require('../Models/vendors');
const multer= require('multer');
const path = require('path'); 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Specify the uploads directory
    },
    filename: function (req, file, cb) {
      // Use the original name and add a timestamp to avoid overwriting
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });

  const upload = multer({ storage: storage });

const addfirm= async (req,res)=>{
    try {
        
   
const {firmName, area, category, region, offer} = req.body;
const image = req.file? req.file.filename: undefined;

const vendor = await Vendor.findById(req.vendorID)
if (!vendor){
    res.status(404).json({message:"vendor not found - "})
}

const firm = new firm({
    firmName, area, category, region, offer, image, vendor: vendor._id
})
await firm.save();

return res.status(200).json({message:'firm added sucessfully'})

} catch (error) {
        console.error(error)
        res.status(500).json("internal server error")
}

}

module.exports= {addfirm:[upload.single('image'), addfirm]};