import React, { useEffect, useState } from 'react';

const ClientReviews = () => {
    const [review, setReview] = useState([]);
    const [loading, setLoading] = useState(true);

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
                        <div className=' border-l-[3px] border-[#000000]'>
                            <h2 className=' md:ml-44 ml-16'>{rev._id}</h2>
                        </div>
                    </div>)
                }
            </div>
        );
    }
};

export default ClientReviews;