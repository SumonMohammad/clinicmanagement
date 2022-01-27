const Patient = require("../models/apointment");
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncErrors = require("../middlewares/catchAsyncErrors")

const APIFeatures = require("../utils/apiFeatures")

// Create new patient => api/v1/patient/new

exports.newPatient= catchAsyncErrors( async (req,res ,next)=>{
    const patient = await Patient.create(req.body);

    res.status(201).json({
        success:true,
        patient
    })
})
// Get all patients => api/v1/patients

exports.getPatients= catchAsyncErrors( async (req,res, next)=>{
    const resPerPage= 6;
    const patientCount = await Patient.countDocuments()
    const apiFeatures = new APIFeatures(Patient.find(), req.query)
                        .search()
                        .filter()
                        .pagination(resPerPage)

    const patients = await apiFeatures.query;
    
    res.status(200).json({
        success:true,
        count:patients.length,
        patientCount,
        patients
         
    })
})

//Get single Patient => api/v1/patient/:id


exports.getSinglePatient = catchAsyncErrors(async(req,res ,next)=>{
    const patient = await Patient.findById(req.params.id);

    if(!patient){
        return next(new ErrorHandler("patient not found", 404));
    }

    res.status(200).json({
        success:true,
        patient
    })
})
 