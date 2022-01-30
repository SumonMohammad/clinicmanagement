import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../actions/patientActions"
import Patient from './patient/Patient';
import Pagination from "react-js-pagination"

const Home = ({ match }) => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1)
    const [status, setStatus] = useState("")

    const statusList = [
        "cancelled",
        "delayed"
    ]


    const { loading, patients, resPerPage, patientCount } = useSelector(state => state.patients)
    const keyword = match.params.keyword;
    useEffect(() => {
        dispatch(getPatients(keyword, currentPage, status))
    }, [dispatch, currentPage, keyword, status])

    const setCurrentPageNo = (pageNumber) => {
        setCurrentPage(pageNumber)

    }


    return (
        <Fragment >
            {loading ? (<h1 className='flex items-center pl-12 pt-36 md:pt-32 text-3xl font-bold text-orange-500'>Loading....</h1>) : (
                <Fragment>
                    <div className=" bg-white w-full px-12 pt-36 md:pt-24 ">
                        <h1 className='text-3xl font-bold text-gray-700 py-10'>Current Patient Serial</h1>
                        <div className='flex flex-col md:grid md:grid-cols-3 gap-6'>

                            {keyword ? (
                                <Fragment>
                                    <div className='md:col-span-1'>
                                        <div className='mt-8'>
                                            <h4 className='text-orange-600 font-bold text-xl'>Status Type</h4>

                                            <ul className='pl-0 mt-4 '>
                                                {
                                                    statusList.map((status) => (
                                                        <li
                                                            className='list-none cursor-pointer mt-2 text-green-500'
                                                            key={status}
                                                            onClick={() => setStatus(status)}
                                                        >
                                                            {status}


                                                        </li>))
                                                }
                                            </ul>
                                        </div>

                                    </div>
                                    <div className='md:col-span-2' >
                                        <div className='flex flex-col md:grid md:grid-cols-2'>
                                            {patients && patients.map((patient) => (
                                                <Patient key={patient._id} patient={patient} />

                                            ))}

                                        </div>

                                    </div>

                                </Fragment>
                            ) : (patients && patients.map((patient) => (
                                <Patient key={patient._id} patient={patient} />

                            )))}






                        </div>
                    </div>

                    <div className=' flex items-center justify-center my-8 '>
                        <Pagination
                            activePage={currentPage}
                            itemsCountPerPage={resPerPage}
                            totalItemsCount={patientCount}
                            onChange={setCurrentPageNo}
                            nextPageText={'Next'}
                            prevPageText={'Prev'}
                            firstPageText={'First'}
                            lastPageText={'Last'}
                            itemClass="page-item"
                            linkClass="page-link"





                        />

                    </div>

                </Fragment>
            )}

        </Fragment>


    )
};

export default Home;
