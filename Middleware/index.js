const jwt = require("jsonwebtoken")
const middlewares = {
     authMiddleware : (request,response,next)=>{
        try {
            console.log("Hello Middleware here");
            // console.log(request.headers.authorization);
            const token = request.headers.authorization.split(" ")[1]
            // console.log(token);
            const isusertrue = jwt.verify(token, process.env.JWT_KEY)
            // console.log(isusertrue. _doc);
            const user = true
            if(isusertrue){
            next();           
            }else{
                response.status(400).json({message:"invalid user"})
            }      
        } catch (error) {
            response.status(400).json({message:"Please login then continue"})
            
        }
      
    }
}
module.exports = middlewares