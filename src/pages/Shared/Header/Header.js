import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import close from '../../../assets/icon/close.svg';
import menu from '../../../assets/icon/menu.svg';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const [toggles, setToggles] = useState(false);
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <nav className=' flex justify-between py-4 px-6 items-center sticky top-0 z-10 mb-4 shadow-md bg-white'>
            <Link to='/' className=' font-[libre] text-4xl text-black uppercase'>Al<span className=' text-gray-600'>ex</span></Link>

            <div className=' hidden md:block font-[poppins] md:text-lg text-base text-black nav-links uppercase'>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blogs'>Blogs</Link>
                {
                    user?.email ?
                        <>
                            <Link to='/addServices'>Add Services</Link>
                            <Link to='/myReviews'>My Reviews</Link>
                            <button onClick={handleLogOut} className=' btn btn-primary btn-outline'>sign out</button>
                        </>
                        :
                        <Link to='/signin'><button className=' btn btn-primary btn-outline'>sign in</button></Link>
                }
            </div>

            <div className='md:hidden flex flex-1 justify-end items-center'>
                <img src={toggles ? close : menu} alt='menu' className='w-[32px] h-[32px] object-contain cursor-pointer' onClick={() => setToggles((previous) => !previous)} />

                <div className={`${toggles ? 'flex' : 'hidden'} p-6 bg-[#181818] absolute top-0 right-0 w-60 flex-col items-end `}>
                    <img src={toggles ? close : menu} alt='menu' className='w-[24px] h-[24px] object-contain mb-7 cursor-pointer' onClick={() => setToggles((previous) => !previous)} />
                    <div className='flex flex-col font-[poppins] uppercase md:text-lg text-base text-white z-40 bg-[#181818] w-full mobile-nav-link relative'>

                        <Link to='/'>Home</Link>
                        <Link to='/services'>Services</Link>
                        <Link to='/blogs'>Blogs</Link>
                        {

                            user?.email ?
                                <>
                                    <Link to='/addServices'>Add Services</Link>
                                    <Link to='/myReviews'>My Reviews</Link>
                                    <Link onClick={handleLogOut}>Sign Out</Link>
                                </>
                                :
                                <Link to='/signin'>Sign In</Link>

                        }
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Header;