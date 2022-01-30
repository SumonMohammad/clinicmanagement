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


export const getPatients = (keyword="", currentPage = 1, status) => async(dispatch)=>{

    try {

        dispatch({type:ALL_PATIENT_REQUEST})
        let link=`/api/v1/patients?keyword=${keyword}&page=${currentPage}`
        if(status){
            link=`/api/v1/patients?keyword=${keyword}&page=${currentPage}&status=${status}`
        }
        const {data} = await axios.get(link)

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
        const { data } = await axios.get(`/api/v1/singlepatient/${id}`)

        dispatch({
            type:PATIENT_DETAILS_SUCCESS,
            payload : data.singlePatient
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