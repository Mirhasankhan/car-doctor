import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Signup = () => {
    const {createUser} = useContext(AuthContext)
    const handleSignup = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value
        
        createUser(email,password)
        .then(result =>{
            console.log(result);
        })
        .catch(error => console.log(error))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card border-2 border-gray-300 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center mt-3">Sign Up</h1>
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-medium">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>Already have an account? <Link className='text-orange-400 font-bold' to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;