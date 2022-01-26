 import axios from "axios";
 import {
    ALL_PATIENT_REQUEST,
    ALL_PATIENT_SUCCESS,
    ALL_PATIENT_FAIL,
    PATIENT_DETAILS_REQUEST,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/patientsConstant";


export const getPatients = () => async(dispatch)=>{

    try {

        dispatch({type:ALL_PATIENT_REQUEST})
        const {data}= await axios.get("/api/v1/patients")

        dispatch({
            type:ALL_PATIENT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_PATIENT_FAIL,
            payload:error.data.response.message
        })
        
    }

}


//Get patient details

export const getPatientDetails = (id) => async (dispatch) =>{
    try {

        dispatch({type:PATIENT_DETAILS_REQUEST})
        const {data}= await axios.get(`/api/v1/patient/${id}`)

        dispatch({
            type:PATIENT_DETAILS_SUCCESS,
            payload:data.patient
        })
        
    } catch (error) {
        dispatch({
            type:PATIENT_DETAILS_FAIL,
            payload:error.data.response.message
        })
        
    }

}
//clear errors

export const clearErrors =()=>async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
   

}