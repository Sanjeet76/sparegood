import React from 'react';
import { useNavigate } from "react-router-dom";



export default function Home() {

    let navigate = useNavigate();

    const handlecreateaccount = () => {
        let path = '/register';
        navigate(path);
    }

    const handlelogin =()=>{
        let path='/login';
        navigate(path);
    }
    return (
        <div className=' w-full md:w-1/2  relative h-screen text-bottom'>
            <div className='absolute inset-x-0 bottom-0  text-white p-5'>
                <h3 className='text-4xl font-bold py-5'>SpareGood</h3>
                <p className='text-base font-normal text-left '>Canada's first round up app uniquely designed to<br />
                    donate your spare change to your favorite charities</p>
                <div className=' '>
                    <button className='text-nowrap  rounded-lg mt-10 bg-green-600 hover:bg-green-500 text-white font-bold py-2 w-full ' onClick={handlelogin}> Sign in  </button>
                    <br />

                    <button className='text-nowrap border rounded-lg mt-5 hover:bg-slate-600 text-white font-bold py-2 w-full' onClick={handlecreateaccount}>create an account</button>
                </div>
            </div>
        </div>
    );
}
