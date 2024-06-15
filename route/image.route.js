import express from  'express'
import cloudinary from '../utils/util.cloudinary.js'
import upload from '../utils/util.multer.js'
import { addImage,getImage,deleteImage } from '../controller/image.controller.js';
import { get } from 'mongoose';

const router =express.Router();

router.post('/',upload.single('image'),addImage )



// router.delete("/delete/:id",deleteImage);
router.get('/:id',getImage)


export default router


