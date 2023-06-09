import React from 'react';
import { FaceFrownIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate, useRouteError } from 'react-router-dom'
import img from './image/istockphoto-1011988208-612x612.jpg'


const ErrorPage = () => {
    const { error, status } = useRouteError()
    const navigate = useNavigate()
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <img src={img} alt="" />
                <div className='max-w-md text-center'>
                    
                    
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to="" className='btn'>
                        <button onClick={() => navigate(-1)} className=' rounded-lg px-1 py-3'> back to page</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;