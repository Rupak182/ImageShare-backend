import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads')
    },

    filename:(req,file,cb)=>{
        cb(null,Date.now()+file.originalname);
    }
})



const upload = multer({storage:multer.diskStorage({}),
    fileFilter:(req,file,cb)=>{
        let ext =path.extname(file.originalname);

        if(ext !== '.jpg' && ext!='.jpeg' && ext!='.png'){
            cb(new Error("File type is not supported"),false);
            return;
        }
        cb(null,true);
    }

});

export default upload

