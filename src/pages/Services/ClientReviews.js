import React, { useContext, useEffect, useState } from 'react';
import userPhoto from '../../assets/icon/user.png';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const ClientReviews = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReview(data));
        setLoading(false);
    }, []);

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
            <div className=' md:my-24 my-14'>
                <p className=' font-[libre] font-medium text-black md:text-5xl text-3xl text-center mb-16'>Client Reviews</p>
                {
                    review.map(rev => <div key={rev._id}>
                        <div className=' border-l-[3px] border-[#000000] md:mb-14 mb-10'>
                            <div className=' lg:ml-44 md:ml-16 ml-6'>
                                <h2 className='font-[libre] font-medium text-black lg:text-4xl md:text-3xl sm:text-2xl text-xl pb-3'>{rev.message}</h2>
                                <p className=' pb-1 font-[poppins] font-bold lg:text-base text-[14px] text-black'>Service: {rev.serviceName}</p>
                                <p className=' pb-6 font-[poppins] text-xs text-[#666666]'>Price: {rev.price}</p>
                                <div className=' flex flex-row items-center'>
                                    <img className=' md:w-8 md:h-8 w-6 h-6 md:mr-4 mr-2' src={user?.email ? user.photoUrl : userPhoto} alt="" />
                                    <p className=' font-[poppins] font-medium text-black md:text-2xl text-xl'>{rev.customer}</p>
                                </div>

                            </div>
                        </div>
                    </div>)
                }
            </div>
        );
    }
};

export default ClientReviews;