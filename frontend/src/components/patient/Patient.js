import React from 'react';
import { Link } from "react-router-dom"

const Patient = ({ patient }) => {
    return (

        <Link to={`/patient/${patient._id}`}>
            <div className='flex flex-col max-w-md rounded-sm border-2 cursor-pointer  '>
                <div className='flex items-center justify-center py-4 shadow-sm text-bold text-3xl text-orange-500'> Patitent Info</div>
                <div className='p-8 space-y-2'>

                    <h1 className='text-bold text-xl  text-green-300'>Patient Name:{patient.name}</h1>

                    <h1 className='text-lg text-yellow-400 text-bold'>Patient Id: {patient.patientId}</h1>
                    <h1 className='text-lg text-yellow-400 text-bold'>apointment Id: {patient.apointmentId}</h1>
                    <h1 className='text-lg text-yellow-400 text-bold'>Contact Number: {patient.contact}</h1>
                </div>

            </div >
        </Link>


    );
};

export default Patient;
