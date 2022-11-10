import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const MyReviews = () => {
    const [myReview, setMyReview] = useState([]);
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReview(data));
        setLoading(false)
    }, [user?.email])
    console.log(myReview);

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    } else {
        return (
            <div className=' py-10'>
                {
                    myReview.map(review =>
                        <div className=' bg-slate-50 p-20 py-10 shadow-lg'>
                            <div>
                                <h2 className=' font-[poppins] font-medium text-center text-2xl md:text-4xl text-black mb-2'>{review.message}</h2>
                                <p className=' font-[poppins] text-center text-base text-black mb-2'>Service: {review.serviceName}</p>
                                <p className='font-[poppins] text-center text-base text-black mb-4'>Price: {review.price}</p>
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className=' btn btn-primary mr-3'>Edit</button>
                                <button className=' btn'>Delete</button>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

};

export default MyReviews;