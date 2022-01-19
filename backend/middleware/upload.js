const multer = require('multer')
const path = require('path');

const storage =  multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null,path.join(__dirname,"../uploads"));
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      callback(null,uniquePrefix +"-"+ file.originalname)
    }
  });

const fileFilter = (req, file, callback)=>{
    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
        callback(null,true);
    }else{
        callback(null,false);
    }
}

module.exports = multer({
    storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*5,
    },
});