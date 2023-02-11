const express = require("express");
const cors = require("cors")
require("dotenv").config() 

const mongoose = require("mongoose");
const poster = require("./Models/postSchema");
const routerr = require("./router/router");
const middlewares = require("./Middleware");
const app = express()
const PORT = process.env.PORT || 9000;

const BASE_URI = process.env.MONGO_URI
mongoose.connect(BASE_URI)
.then(res => console.log("mongodb connect"))
.catch(err => console.log(err, "error")) 
app.use(express.json())
app.use(cors())

app.use("/api", routerr)

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


// connected with frontend
// app.post("/api/add", (req , res , next) =>{
//     // const user = req.body
//     // console.log(user)
//     poster.create(req.body, (err, data) =>{
//         if(err){
//             response.send("error", err)
//         }
//         else{
//             res.json({
//                 meessage : "user created!..",
//                 data : data
//             })
//         }    
//     })
// })

 app.get("/api/get", (request, response)=>{
//     // poster.find({}, (err, postss) =>{
//     //     if(err){
//     //        response.send("error" , err)
//     //     }else{
//     //         response.json(postss)
//     //     }
//     // })
     response.send("get single user")
 })


// // For editing post
// app.get("/api/:id", (request, response)=>{
//     const {id} = request.params
//     poster.findById(id, (err, postss) =>{
//         if(err){
//            response.send("error" , err)
//         }else{
//             response.json(postss)
//         }
//     })
//     // response.send("get single user")
// })


// app.put("/api/:id", async (request, response , next)=>{
//     const edits = request.body;
//     const editpost = new poster(edits)
//     // const {id} = request.params

//     // const {id , name , isActive} = request.body;   for multiple   
// try{
//   await poster.updateOne({_id: request.params.id}, editpost) 
//   response.status(201).json(editpost)
// } catch(error){
//     response.status(409).json({message: error.message})
// }  
//     // response.send("Update single user")
// })

// // deleting the post

// app.delete("/api/:id", (request, response , next)=>{
//     // const {_id} = request.body;
//     const {id} = request.params

//     // console.log(_id);
//     poster.findByIdAndDelete(id, (err, data)=>{
//         if(err){
//             response.send("error",err)
//         }else{
//             response.json({
//                 message : "data deleted",
//                 data,
//             })
//         }
//     })
//     // response.send("delete single user")
// })


// app.post("/api/")    
connectDB().then(() => {
app.listen(PORT, ()=> console.log(`Server is running on port: ${PORT}`))
})
