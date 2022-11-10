import React from 'react';

const NewsLetter = () => {

    const handleEvent = e => {
        e.preventDefault();
        const form = e.target;
        window.alert("Thanks for Joining Us : )");
        form.reset();
    }
    return (
        <div className=' py-14 bg-slate-800 text-white'>
            <h3 className=' font-[libre] font-medium md:text-4xl text-2xl text-center mb-1'>Join News Letter ❤️</h3>
            <p className=' font-[poppins] md:text-base lg:text-lg text-sm text-center opacity-70 mb-6 mx-8'>I share my knowledge on how to become a professional photographer every "Sunday".</p>
            <div className=''>
                <form onSubmit={handleEvent} className=' flex items-center lg:mx-[300px] sm:mx-[100px] md:mx-[200px] mx-[50px]'>
                    <input className=' mr-3 h-11 w-full p-4 bg-slate-200 outline-none rounded ' type="email" name="email" placeholder='Your Email Address' required />
                    <button className=' btn btn-accent'>submit</button>
                </form>
            </div>
        </div>
    );
};

export default NewsLetter;