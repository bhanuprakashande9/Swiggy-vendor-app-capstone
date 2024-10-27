const express= require ("express")
const dotEnv=require('dotenv');
const app= express()
const mongoose= require('mongoose');
const VendorRoutes= require('./Routes/VendorRoute')
const firmRoutes= require('./Routes/firmRoutes')
const bodyparser=require('body-parser')



dotEnv.config();

const  connectDB = async()=>{
    try {
      await mongoose.connect(process.env.MongoDB_URI);
      console.log("MongoDb Connected Successfully")
    } catch (error) {
        console.log(error)
    }
}

connectDB();

app.use(bodyparser.json());

app.use('/api/Vendor',VendorRoutes);

app.use('/api/firm',firmRoutes);



app.listen(2000,()=>{
 console.log("Server is running on port 2000")
})




app.use('/Home',(req,res)=>{
    res.send("<H1>Welcome to home")
})





















