const mongoose = require("mongoose");

const apointmentSchema = new mongoose.Schema({

    name:{
        type: String,
        required: [true, "Please Enter Patient Name"],
        trim: true,
        maxlength:[100, "Patient name should not exceed 100 characters"]
    },
    patientId:{
        type: Number,
        required: [true, "Please Enter Patient Id"],
        trim:true,
        maxlength:[10, "Patient Id should not exceed 10 characters"]
    },
    contact:{
        type: Number,
        required: [true, "Please Enter Patient contact Number"],
        trim:true,
        maxlength:[20, "Patient contact number  should not exceed 20 characters"]

    },
    apointmentId:{
        type: Number,
        required: [true, "Please Enter Apointment Id"],
        trim:true,
        maxlength:[10, "Apointment Id should not exceed 10 characters"]
    },
    DoctorName:{
        type: String,
        required: [true, "Please Enter Doctor Name"],
        trim: true,
        maxlength:[100, "Doctor name should not exceed 100 characters"]
    },
    description:{
        type: String,
        required: [true, "Please Enter Description Name"],
        trim: true,
        maxlength:[1000, "Description name should not exceed 1000 characters"]

    },
    status:{
        type:String,
        required:true
    },
    // address:{
    //     city:{
    //         type: String,
    //         required:true
    //     },
    //     thana:{
    //         type: String,
    //         required:true
    //     },
         
    // },
    createdAt:{
        type:Date,
        default: Date.now
    }

    

})

module.exports = mongoose.model("Apointment", apointmentSchema)