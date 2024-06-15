import mongoose from "mongoose";

const imgSchema = new mongoose.Schema({
    id:String,
    avatar:String,
    // cloudinary_id : String

})

const Image= mongoose.model("image",imgSchema);
export default Image;