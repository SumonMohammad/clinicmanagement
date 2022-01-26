import React, { Fragment, useEffect } from 'react';
import Header from './layout/Header';
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../actions/patientActions"
import Patient from './patient/Patient';

const Home = () => {
    const dispatch = useDispatch();

    const { loading,patients } = useSelector(state => state.patients)

    useEffect(() => {
        dispatch(getPatients())
    }, [dispatch])

    return (
        <Fragment>
            {loading ? (<h1>Loading....</h1>) : (
                <Fragment><Header />
                    <div className=" bg-white w-full px-12 pt-24">
                        <h1 className='text-3xl font-bold text-gray-700 py-10'>Current Patient Serial</h1>
                        <div className='grid grid-cols-3 gap-6'>
                            {patients && patients.map((patient) => (
                                <Patient key={patient._id} patient={patient} />

                            ))}

                        </div>
                    </div>
                </Fragment>
            )}

        </Fragment>


    )
};

export default Home;
