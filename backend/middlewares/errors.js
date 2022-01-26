const ErrorHandler = require("../utils/errorHandler")

module.exports = (err, req,res, next)=>{
    err.statusCode= err.statusCode || 500;
    if(process.env.NODE_ENV==="DEVELOPMENT"){
        res.status(err.statusCode).json({
            success:false,
            error:err,
            errMessage:err.message,
            stack:err.stack,
        })
    }
    if(process.env.NODE_ENV==="PRODUCTION"){
        let error = {...err}

        error.message = err.message

        if(err.name==="CastError"){
            const message=`Resource not found. Invalid : ${err.path}`
            error= new ErrorHandler(message, 400)
        }

        if(err.name==="ValidationError"){
            const message= Object.values(err.errors).map(value=value.message)
            error= new ErrorHandler(message, 400)
        }
        if(err.code===11000){
            const message=`Duplicate ${Object.keys(err.keyValue)} entered`
            error= new ErrorHandler(message, 400)
        }

        if (err.name==="JsonWebTokenError"){
            const message= "Json web token is invalid! Try again!!!"
            error= new ErrorHandler(message, 400)

        }
        if (err.name==="TokenExpiredError"){
            const message= "Json web token Expired! Try again!!!"
            error= new ErrorHandler(message, 400)

        }

        res.status(err.statusCode).json({
            success:false,
            message:error.message ||"Internal server error"
        })
    }
    
}