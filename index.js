import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import imageRoute from './route/image.route.js'
import cors from 'cors'


const PORT =process.env.PORT || 4000;


const app =express();
dotenv.config();
app.use(cors());

try {
    
   await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongodb")

} catch (error) {
    console.log("Error: " , error)
}

app.use('/image',imageRoute)


app.listen(PORT, ()=> console.log("Server running at port " + PORT))