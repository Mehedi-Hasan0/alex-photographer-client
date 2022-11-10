import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/icon/google.svg';
import github from '../../assets/icon/github.svg';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignIn = () => {
    const { signin, loginWithGoogle, loginWithGithub, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log('currentUser', user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
                setError(error.message);
            }).finally(() => {
                setLoading(false);
            })

    }
    // sign in with google
    const handleGoogleSignIn = () => {
        loginWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    const handleGithubSignIn = () => {
        loginWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            }).catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='mt-10 md:mx-16 mx-6 font-poppins'>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto my-8">
                <h1 className=' md:text-4xl text-2xl text-stone-800 text-center font-medium mt-4'>Login Now!</h1>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <p>{error.slice(22, -2)}</p>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <p>New to Coding Hero? <Link className='text-[#570DF8] font-medium text-base' to='/signup'>Sign Up</Link></p>
                    <hr className=' bg-slate-400 h-[2px] my-1' />
                    <p className=' text-center text-base'>---  Or Login With  ---</p>
                    <hr className=' bg-slate-400 h-[2px] my-1' />
                    <div onClick={handleGoogleSignIn} className=' flex sm:flex-row flex-col justify-around items-center'>
                        <div className=' p-2 rounded-xl bg-slate-100 hover:bg-slate-200 shadow-lg flex flex-row items-center cursor-pointer my-3'>
                            <img className=' md:w-[32px] w-[24px] rounded-full' src={google} alt="Google" />
                            <p className=' font-poppins text-base mx-2'>Google</p>
                        </div>
                        <div onClick={handleGithubSignIn} className=' p-2 rounded-xl bg-slate-100 hover:bg-slate-200 shadow-lg flex flex-row items-center cursor-pointer'>
                            <img className=' md:w-[32px] w-[24px] rounded-full' src={github} alt="Github" />
                            <p className=' font-poppins text-base mx-2'>Github</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignIn;