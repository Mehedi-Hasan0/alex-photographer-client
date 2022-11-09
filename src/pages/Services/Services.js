import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();

    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <div className=' services  lg:py-10 md:py-5'>
                <div className='py-4'>
                    <h2 className=' font-[poppins] font-bold text-lg md:text-xl text-[#4506CB]  text-center'>Services</h2>
                    <p className='font-[poppins] text-lg md:text-xl text-[#151515] mb-4 mx-8 text-center'>Choose the best services and see the beauty of photo.</p>
                </div>
                <div className=' mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        services.map(service =>
                            <div key={service._id} className="card card-compact w-[80%] md:w-96 bg-base-100 shadow-xl my-6 mx-auto" >
                                <figure>
                                    <PhotoProvider>
                                        <PhotoView key={service._id} src={service.img}>

                                            <img className=' cursor-zoom-in' loading='lazy' src={service.img} alt="Shoes" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.service_name}</h2>
                                    <p className=' mb-3'>{service.service_description.slice(0, 100)}...</p>
                                    <div className="card-actions justify-end">
                                        <Link to=''><button className="btn btn-primary">veiw details</button></Link>
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

export default Services;