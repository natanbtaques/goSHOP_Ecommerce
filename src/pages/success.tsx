import Link from 'next/link';
import React from 'react'
import { useDispatch } from 'react-redux';
import { resetCart } from '../store/nextSlice';

const success = () => {
    const dispatch = useDispatch();
    return (
        <div className=' mt-4  h-full col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg min-h-[calc(100vh-200px)]'>
            <h1 className='text-2xl text-hoverBg font-semibold'>Thank you for shopping with goSHOP</h1>
            <Link className='text-lg text-gray-500 hover:underline underline-offset-4 decoration-[1px] hover:text-blue-600 duration-300' href={"/"} onClick={() => (dispatch(resetCart()))}>
                <p>Continue Shopping </p>
            </Link>
        </div>

    )
}

export default success
