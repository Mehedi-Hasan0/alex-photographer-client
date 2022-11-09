import React from 'react';
import './PreviousWorks.css';
import img1 from '../../../assets/recent-works/img1.jpg';
import img2 from '../../../assets/recent-works/img2.jpg';
import img3 from '../../../assets/recent-works/img3.jpg';
import img4 from '../../../assets/recent-works/img4.jpg';
import img5 from '../../../assets/recent-works/img5.jpg';
import img6 from '../../../assets/recent-works/img6.jpg';
import img7 from '../../../assets/recent-works/img7.jpg';

const PreviousWorks = () => {
    return (
        <div className='mx-6'>
            <h2 className=' font-[Libre] md:text-4xl sm:text-2xl text-xl text-[#121212] lg:w-[70%] md:w-[85%] lg:leading-normal md:leading-[1.4] leading-snug tracking-[0.01em] mx-auto lg:my-16 md:my-11 my-8 sm:text-center text-justify'>Alex-Photography is a service based website in Bangladesh, Dhaka. I am expert in shooting liquids and my colorful liquid work, titled “Biford”, has become very well known and collectable.</h2>

            <div>
                <h3 className=' font-[poppins] font-medium md:text-5xl sm:text-4xl text-3xl text-[#66666b] text-center  opacity-70 mb-9'>Recent Works</h3>
                <div className=' flex md:flex-row md:justify-between flex-col item-center recent-works-container'>
                    <div className=' flex flex-col justify-between'>
                        <img loading='lazy' src={img1} alt="" />
                        <img src={img2} alt="" loading='lazy' />
                    </div>
                    <div className='flex flex-col justify-between'>
                        <img src={img3} alt="" loading='lazy' />
                        <img src={img4} alt="" loading='lazy' />
                        <img src={img5} alt="" loading='lazy' />
                    </div>
                    <div className=' flex flex-col justify-between'>
                        <img src={img6} alt="" loading='lazy' />
                        <img src={img7} alt="" loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PreviousWorks;