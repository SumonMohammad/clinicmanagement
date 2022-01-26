import {
    ALL_PATIENT_REQUEST,
    ALL_PATIENT_SUCCESS,
    ALL_PATIENT_FAIL,
    PATIENT_DETAILS_REQUEST,
    PATIENT_DETAILS_SUCCESS,
    PATIENT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/patientsConstant"

export const patientsReducer = (state = { patients: [] }, action) => {
    switch (action.type) {

        case ALL_PATIENT_REQUEST:
            return {
                loading: true,
                patients: []
            }

        case ALL_PATIENT_SUCCESS:
            return {
                loading: false,
                patients: action.payload.patients
            }

        case ALL_PATIENT_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const patientDetailsReducers = (state = {patient:{}}, action) => {
    switch (action.type) {
        case PATIENT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case PATIENT_DETAILS_SUCCESS:
            return {
                loading: false,
                patient: action.payload
            }
        case PATIENT_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}