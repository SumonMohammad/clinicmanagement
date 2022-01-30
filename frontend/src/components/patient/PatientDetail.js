import React,{Fragment, useEffect} from 'react';
import {Link} from "react-router-dom"
import { useAlert } from 'react-alert';

import { useDispatch, useSelector } from 'react-redux';

import { getPatientDetails, clearErrors } from '../../actions/patientActions';

const PatientDetail = ({match}) => {

    const alert = useAlert();
    const dispatch = useDispatch()
    const {error,  singlepatient} = useSelector(state=>state.patientDetails)

    useEffect(()=>{
       dispatch(getPatientDetails(match.params.id))
       if(error){
           alert.error(error)
           dispatch(clearErrors())
       }

    },[dispatch, match.params.id, error,alert])
  return (
      <Fragment>
      <Link to={`/singlepatient/${singlepatient._id}`} className='hover:no-underline'>
      <div className='flex flex-col max-w-sm md:max-w-md rounded-sm border-2 cursor-pointer  '>
            
                <div className='flex items-center justify-center py-4 shadow-sm text-bold text-3xl  text-orange-500 '> Patitent Info</div>
          
                <div className='p-8 space-y-2'>

                <h1 className='text-bold text-xl  text-green-300'>Patient Name : {singlepatient.name}</h1>

                <h1 className='text-lg   text-yellow-400 text-bold'>Patient Id : {singlepatient.patientId}</h1>
                <h1 className='text-lg   text-yellow-400 text-bold'>apointment Id : {singlepatient.apointmentId}</h1>
                <h1 className='text-lg   text-yellow-400 text-bold'>Contact Number   : {singlepatient.contact}</h1>
                <h1 className='text-lg   text-yellow-400 text-bold'>Patient Id : {singlepatient.DoctorName}</h1>
                <h1 className='text-lg   text-yellow-400 text-bold'>Patient Id : {singlepatient.description}</h1>
                <h1 className='text-lg   text-yellow-400 text-bold'>Patient Id : {singlepatient.status}</h1>
            </div>

        </div >
        </Link>
      
      </Fragment>
  );
};

export default PatientDetail;
