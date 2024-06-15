import cloudinary from "../utils/util.cloudinary.js";
import Image from "../model/image.model.js";

export const addImage =
    async (req, res) => {
        try {
            console.log(req.file);
            const result = await cloudinary.uploader.upload(req.file.path);

                
            let image = new Image({
                id:req.body.id,
                avatar: result.secure_url,
            })

            await image.save();
            res.status(201).json(image);

        } catch (error) {
            console.log("Error :", error);
            res.status(500).json({ message: "Internal server error" })

        }
    }

export const getImage = async (req, res) => {
    try {
        let id =req.params.id;
        let image = await Image.find({id:id});
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" })
    }
}

export const deleteImage = async (req, res) => {
    try {
        
        console.log("try");
        let id =req.params.id;
        let image = await Image.findById(id);
        console.log(image);

        await cloudinary.uploader.destroy(image.cloudinary_id);
        await image.deleteOne();
        res.status(200).json(image);
    } 
    
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}