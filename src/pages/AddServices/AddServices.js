import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddServices = () => {
    const { user } = useContext(AuthContext);

    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const img = form.img.value;
        const name = form.serviceName.value;
        const email = user?.email;
        const description = form.description.value;
        const price = form.price.value;
        const date = new Date();

        const service = {
            img: img,
            service_name: name,
            service_description: description,
            price: price,
            customer: name,
            email,
            date
        }

        fetch('https://alex-photographer-server.vercel.app/allServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service is added')
                    form.reset();
                }
            })
            .catch(er => console.error(er));
    }
    useEffect(() => {
        // scroll to top on page load
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    return (
        <div>
            <h3 className=' font-[libre] font-medium text-black sm:text-5xl text-2xl text-center py-5'>Add a Service you want!</h3>
            <div className=' my-20 p-14 bg-slate-800'>
                <h2 className=' font-[poppins] font-medium text-white text-4xl text-center mb-9'>Service Details Form</h2>
                <form onSubmit={handlePlaceOrder} className="w-full max-w-3xl mx-auto">
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" required>
                                Service Name
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='serviceName' placeholder='service name' required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" >
                                Image Url
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='img' placeholder='service img' required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" required>
                                Description
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" name='description' placeholder='About service' required />
                        </div>
                    </div>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/5">
                            <label className="block text-white font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name" required>
                                Price
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input className="bg-white appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" name='price' placeholder='0$' required />
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className=" md:mx-auto">
                            <input className='btn btn-primary' type="submit" value="Submit" />
                        </div>
                    </div>
                </form>
            </div>
        </div >
    );
};

export default AddServices;