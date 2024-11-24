import multer from 'multer';

const storage = multer.diskStorage({
    filename: function (req, files, callback){
        return callback(null, files.originalname)
    }
})

const upload = multer({storage});

export default upload;