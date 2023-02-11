const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../Models/userSchema")
// const userModel = require("../Models/userSchema")
const planter = require("../Models/ProductSchema")

const authController  = {
    signup: async (request, response)=>{
        const {name, email, password, phoneNum} = request.body
         
        if(!name || !email || !password || !phoneNum){
            response.status(400).send("Required fields are missing")
            return
        }
    
        const hashpassword = await bycrypt.hash(password, 10)
        const objtosend = {
            name,
            email,
            password : hashpassword,
            phone_Num : phoneNum,
        }
        // console.log(objtosend)
        userModel.findOne({email}, (err, user) =>{
            if(err){
                console.log(err, "ERROR");
                response.status(500).json({message: "Something went wrong",err})
            }else{
                // console.log("User", user);
                if(user){
                    response.status(400).json({message:"User already exist"})
                }else{
                    userModel.create(objtosend, (err, data)=>{
                        if(err){
                            console.log(err, "ERROR");
                            response.status(500).json({message: "Something went wrong",err})
                        }else{
                            response.status(200).json({
                                message: "User successfully signup",
                                // data : {name: data.name, email: data.email, phoneNum: data.phone_Num},
                                data: data,
                                status: true,
                            })
                        }
                    })
                }
            }
        })
    
        
        // response.send("All is well")
        // console.log(body, "BODY");
    },
    login : (request, response)=>{
        const {email, password} = request.body
     
        if(!email || !password){
         response.status(400).json({message: "Required field is missing"})
         return
        }
     
        userModel.findOne({email}, async (err, user)=>{
         if(err){
             console.log(err, "ERROR");
             response.status(500).json({message: "Something went wrong",err})
         }else{
             // console.log(user);
             if(user){
                 const ispassMatch = await bycrypt.compare(password, user.password)
                 console.log(ispassMatch);
                 if(ispassMatch){
                     const tokenobj = {
                         ...user,
                     }
                     const token = jwt.sign(tokenobj, process.env.JWT_KEY)
                     console.log(token);
                     response.status(200).json({
                         message : "User successfully logged in",
                         data : user,
                         status : true,
                         token,
                     })
                 }else{
                     response.status(400).json({
                         message:"credential error !"
                     })
                 }
             }else{
                 response.status(400).json({
                     message:"credential error !"
                 })
             }
         }
        })
     },
    tokennn:  (request, response , next)=>{
        // console.log(request.headers.authorization, "header");
        response.status(200).json({message: "User logged in"})
    },
        addtocart:(request, response, next)=>{
        const product = request.body
        planter.create(product, (err, data) =>{
        if(err){
            response.send("error", err)
        }
        else{
            response.json({
                meessage : "Product Added!..",
                data : data
            })
        }    
    })
    },

    getCartData:(request, response )=>{
          planter.find({}, (err, plants) =>{
        if(err){
           response.send("error" , err)
        }else{
            response.json(plants)
        }
    })
    },

}



module.exports = authController
