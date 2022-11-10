import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import PreviousWorks from '../PreviousWorks/PreviousWorks';
import Slider from '../Slider/Slider';
import 'react-photo-view/dist/react-photo-view.css';
import NewsLetter from '../NewsLetter/NewsLetter';


const Home = () => {
    const services = useLoaderData();

    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);
    return (
        <div>
            <Slider />
            <PreviousWorks />
            <div className=' services  lg:py-16 md:py-11 bg-[#F1F1F1] mt-9'>
                <div className='py-4 md:py-9'>
                    <h2 className=' font-[poppins] font-medium text-2xl md:text-3xl lg:text-4xl text-[#1F2937]  text-center'>Services</h2>
                    <p className='font-[poppins] text-base md:text-lg lg:text-xl text-[#4242429f] mb-4 mx-8 text-center'>Choose the best services and see the beauty of photo :)</p>
                </div>
                <div className=' mx-6 flex md:flex-row md:justify-between flex-col'>
                    {
                        services.map(service =>
                            <div key={service._id} className="card card-compact w-[80%] md:w-96 bg-base-100 shadow-xl my-6 lg:mx-5 md:mx-3 mx-auto" >
                                <figure>
                                    <PhotoProvider>
                                        <PhotoView key={service._id} src={service.img}>
                                            <img className=' cursor-zoom-in' loading='lazy' src={service.img} alt="Shoes" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{service.service_name}</h2>
                                    <p className=' mb-2'>Price: {service.price}</p>
                                    <p className=' mb-3'>{service.service_description.slice(0, 100)}...</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/serviceDetails/${service._id}`}><button className="btn btn-primary">veiw details</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className=' flex items-center'>
                    <Link to='/services' className=' mx-auto mb-6'><button className='btn btn-outline btn-primary'>see all services</button></Link>
                </div>
            </div>
            {/* newsletter section */}
            <NewsLetter />
        </div>
    );
};

export default Home;