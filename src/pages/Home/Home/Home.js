import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PreviousWorks from '../PreviousWorks/PreviousWorks';
import Slider from '../Slider/Slider';

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Slider />
            <PreviousWorks />
            <div className=' services  lg:py-16 md:py-11 bg-[#F1F1F1] my-9'>
                <div className='py-4 md:py-9'>
                    <h2 className=' font-[poppins] font-medium text-2xl md:text-3xl lg:text-4xl text-[#1F2937]  text-center'>Services</h2>
                    <p className='font-[poppins] text-base md:text-lg lg:text-xl text-[#424242] mb-4 mx-8 text-center'>Choose the best services and see the beauty of photo :)</p>
                </div>
                <div className=' mx-6 flex md:flex-row md:justify-between flex-col'>
                    {
                        services.map(service =>
                            <div key={service._id} className="card card-compact w-[80%] md:w-96 bg-base-100 shadow-xl my-6 lg:mx-5 md:mx-3 mx-auto" >
                                <figure><img loading='lazy' src={service.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
};

export default Home;