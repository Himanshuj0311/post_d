const mongoose=require("mongoose");
 //Note schema;

 const postSchema=mongoose.Schema({
   
   title: { type: String, required: true },

   body: { type: Number, required: true },

   device: { type: String, required: true,
   enum:["Laptop","Tablet","Mobile"]
   },
   no_of_comments:{type:Number,required:true},
   userId:{type:String,required:true}
 },{versionKey:false})
 const PostModel=mongoose.model("post",postSchema)

 module.exports={PostModel}