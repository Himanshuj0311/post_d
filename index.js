const express=require("express")
const {connection}=require("./db")
require("dotenv").config();
const {userRouter}=require("./routes/user.routes")
const {postRouter}=require("./routes/post.routes")
const {auth}=require("./middlewares/auth.middle")
//const cors=require("cors")
const app=express()
app.use(express.json())
//app.use(cors())

app.use("/users",userRouter)
app.use(auth)
app.use("/post",postRouter)

app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot connect to DB")
        console.log(err)
    }
    console.log("Server is running at port 4500")
})



