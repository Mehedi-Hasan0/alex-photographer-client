import React from 'react';
import './SliderItem.css';

const SliderItem = ({ slider }) => {
    const { img, id, prev, next } = slider;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className=' slider-img'>
                <img src={img} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 md:left-24 left-4 md:top-1/4 top-1/3">
                <h1 className='lg:text-6xl sm:text-5xl text-xl font-bold text-white font-[libre] '>
                    Welcome to the<br />
                    World of <br />
                    Alex Photography
                </h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 md:left-24 left-4 md:top-1/2 top-[65%]">
                <p className=' sm:block hidden text-base text-white mt-8'>I am a professional Photographer. Do you want sports, wild life, wedding e.t.c Photography services? Then Let's talk!!</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-[70%]">
                <button className="btn btn-primary md:block hidden">Go to Services</button>

            </div>
            <div className=" absolute flex justify-end transform -translate-y-1/3 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle text-sm mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle text-sm ">❯</a>
            </div>
        </div>
    );
};

export default SliderItem;