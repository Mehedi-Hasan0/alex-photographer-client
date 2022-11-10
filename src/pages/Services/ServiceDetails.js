import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const service = useLoaderData();
    console.log(service);

    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <div className=' flex flex-row justify-center md:py-16 py-10 md::w-[60%] w-[80%] mx-auto items-center'>
                <h4 className=' font-[poppins] uppercase text-black sm:text-lg text-sm mr-6 mt-1'>about</h4>
                <h3 className=' font-[libre] font-medium text-black sm:text-5xl text-2xl py-5 pl-5 border-l '>{service.service_name}</h3>
            </div>
            <img src={service.img} alt="" />
            <div className=' md:my-24 my-14 md:mx-16 mx-9'>
                <div>
                    <h2 className=' font-[poppins] font-medium text-black md:text-4xl text-2xl md:mb-9 mb-6'>Info About {service.service_name}!</h2>
                    <p className=' font-[poppins] md:text-lg text-xs text-[#666666] md:leading-8'>{service.service_description}</p>
                </div>
                <div className=' md:my-24 my-14'>
                    <p className=' font-[libre] font-medium text-black md:text-5xl text-3xl text-center mb-16'>Client Reviews</p>
                    <div className=' border-l-[3px] border-[#000000]'>
                        <h2 className=' md:ml-44 ml-16'>d</h2>
                    </div>
                </div>
            </div>
            {/* review section */}
            <div className=' my-20 p-14 bg-slate-800'>
                <h2 className=' font-[poppins] font-medium text-white text-4xl text-center mb-9'>Add a Review</h2>
                <form className="w-full max-w-3xl mx-auto">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                Full Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Comment
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message" required></textarea>
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                Photo Url
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="text" placeholder='Add PhotoUrl' />
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className=" md:mx-auto">
                            <button className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ServiceDetails;