const path = require("path")
//  
const multer = require("multer")


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,path.join(__dirname,"../../public/uploadImgs"));
    },
    filename: function (req, file, callback) {
   
      callback(null, file.originalname)
    }
  })

 const fileFilter = (req, file, callback) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/jpg") {
      callback(null, true)
    }
    else{
        callback(null, false)
     }
 }


module.exports = multer({

    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5,
    }
})