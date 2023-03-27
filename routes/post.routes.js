const express=require("express");
const postRouter=express.Router();
const {PostModel}=require("../model/post.model")
const jwt=require("jsonwebtoken")
postRouter.get("/",async(req,res)=>{
    const query = req.query
    try {
      const post = await PostModel.find(query)
      res.send(post)
    } catch (error) {
      res.status(400).send(err);
    }
})

postRouter.get("/:id",async(req,res)=>{
  try {
    const id=req.params.id;
    const post=await PostModel.findById(id);
    res.send(post)
  } catch (error) {
    res.status(400).send(err);
  }
}) 

postRouter.post("/add",async(req,res)=>{
    const payload = req.body;
     try {
       const post = new PostModel(payload);
       await post.save();
       res.status(200).send({ "msg": "New post has been add" });
     } catch (err) {
       res.status(400).send(err);
     }
   
})

postRouter.patch("/edit/:userID", async (req, res) => {
    const { userID } = req.params
    const payload = req.body
    try {
      const query = await PostModel.findByIdAndUpdate({ _id: userID }, payload)
      res.status(200).send({"mss":"the post updete"})
    } catch (err) {
      console.log(err)
      res.send({ "err": "something went wrong" })
    }
   })
   
   
  
  
  //adetete post
  
  postRouter.delete("/remove/:userID", async (req, res) => {
    const userID = req.params.userID
    try {
      await PostModel.findByIdAndDelete({ _id: userID })
      res.send(`post with  id ${userID} has been deleted from the database`)
    } catch (err) {
      console.log(err)
      res.send({ "err": "something went wrong" })
    }
  })




module.exports={
postRouter
}