const express = require("express");
const Album =require("../models/album.model")
const upload=require('../middleware/upload')

const router = express.Router();

const bodyParser = require('body-parser')

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })



router.post("/:userid", upload.any("album_img"), async (req, res) => {

    const filePaths = req.files.map(file=>file.path);


    try {
      const albumphoto = await Album.create({
        user_id:req.params.userid,  
        title: req.body.title,
        img:filePaths
      });
  
      console.log(albumphoto);
      return res.status(201).send(albumphoto);
    } catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
  });


  router.get("/:userid",async(req,res)=>{
      try{
        const albums=await Album.find({ user_id: req.params.userid}).lean().exec();
        console.log(albums);
       return res.status(201).send(albums);
      }

      catch (e) {
        return res.status(500).json({ status: "failed", message: e.message });
      }
     
  })

  router.delete("/:userid/:albumid",async(req,res)=>{
    try{
      const albums=await Album.findByIdAndDelete(req.params.albumid).lean().exec();
      console.log(albums);
     return res.status(201).send(albums);
    }

    catch (e) {
      return res.status(500).json({ status: "failed", message: e.message });
    }
   
})

router.patch('/:userid/:albumid',async(req,res)=>{

    try{
      const album=await Album.findByIdAndUpdate(req.params.albumid,req.body,{new:true}).lean().exec()
        res.status(201).send(album)
    }
    
    
    catch(e){
        res.status(500).json({message:e.message, status:"Failed"})
    }
    
    })












module.exports = router;