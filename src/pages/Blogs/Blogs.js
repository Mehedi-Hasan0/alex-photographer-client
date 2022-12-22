import React from 'react';

const Blogs = () => {
    return (
        <div className=' mx-6 my-9'>
            <div className=' bg-slate-100 rounded-2xl shadow-md py-10 mb-6'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>Q1: Difference between SQL and NoSQL?</h4>
                <p className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5'>Ans: A SQL Database follows a table like structure which can have an
                    unlimited number of rows and every data present inside the database
                    is properly structured with Predefined Schemas, it is basically used
                    to manipulate Relational Databases Management Systems. A NoSQL Database is a Distributed Database where the data is very unstructured with Dynamic Schema. Unlike SQL it cannot have unlimited rows but it follows a Standard Schema Definition and can store all sorts of data models with large distributed data in the form of key-value pairs, graph databases, documents or wide-column stores.</p>
            </div>
            <div className=' bg-slate-100 rounded-2xl shadow-md py-10 mb-6'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>Q1: What is JWT, and how does it work?</h4>
                <p className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5'>Ans: JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP)</p>
            </div>
            <div className=' bg-slate-100 rounded-2xl shadow-md py-10 mb-6'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>Q1: What is the difference between javascript and NodeJS?</h4>
                <p className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5'>Ans: JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            </div>
            <div className=' bg-slate-100 rounded-2xl shadow-md py-10 mb-6'>
                <h4 className=' font-[poppins] font-medium text-black text-2xl md:text-3xl lg:text-4xl p-4 '>Q1: How does NodeJS handle multiple requests at the same time?</h4>
                <p className='p-4 font-[poppins] md:text-lg text-base text-[#666666] md:leading-8 mb-5'>Ans: How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;