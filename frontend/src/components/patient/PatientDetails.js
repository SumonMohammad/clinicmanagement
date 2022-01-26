import React, { Fragment, useEffect } from 'react';
import { useAlert } from "react-alert"
import { useDispatch, useSelector } from 'react-redux';

import { getPatientDetails, clearErrors } from '../../actions/patientActions';

const PatientDetails = ({ match }) => {
    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, patient } = useSelector(state => state.patientDetails)

    useEffect(() => {
        dispatch(getPatientDetails(match.params.id))
        if (error) {
            alert.error(error)
            dispatch(clearErrors)

        }
    }, [dispatch, match.params.id, error, alert])
    return (
        <Fragment>{loading ? (<h1>Loading...</h1>) : (<Fragment><div className='flex flex-col max-w-md rounded-sm border-2'>
            <div className='flex items-center justify-center py-4 shadow-sm text-bold text-3xl text-orange-500'> Patitent Details Info</div>
            <div className='p-8 space-y-2'>
                <h1 className='text-bold text-xl  text-green-300'>Patient Name:{patient.name}</h1>
                <h1 className='text-lg text-yellow-400 text-bold'>Patient Id: {patient.patientId}</h1>
                <h1 className='text-lg text-yellow-400 text-bold'>apointment Id: {patient.apointmentId}</h1>
                <h1 className='text-lg text-yellow-400 text-bold'>Contact Number: {patient.contact}</h1>
            </div>

        </div></Fragment>)}</Fragment>

    );
};

export default PatientDetails;
