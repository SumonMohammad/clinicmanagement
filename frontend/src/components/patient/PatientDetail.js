import React,{Fragment, useEffect} from 'react';

import { useAlert } from 'react-alert';

import { useDispatch, useSelector } from 'react-redux';

import { getPatientDetails, clearErrors } from '../../actions/patientActions';

const PatientDetail = ({match}) => {

    const alert = useAlert();
    const dispatch = useDispatch()
    const {error,loading, singlepatient} = useSelector(state=>state.patientDetails)

    useEffect(()=>{
       dispatch(getPatientDetails(match.params.id))
       if(error){
           alert.error(error)
           dispatch(clearErrors())
       }

    },[dispatch, match.params.id, error,alert])
  return (
      <Fragment>
      <div>
      {singlepatient.name}
      </div>
      
      </Fragment>
  );
};

export default PatientDetail;
