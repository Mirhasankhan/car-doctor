import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg';
import { Link, json, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
    const {signIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = e =>{
        e.preventDefault()
        const form = e.target;      
        const email = form.email.value;
        const password = form.password.value
        signIn(email, password)
        .then(result => {
            const user = result.user;
            // const loggedUser = {
            //     email: user.email
            // }
            // console.log(loggedUser);
            navigate(from, {replace: true})            
           
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
                        <h1 className="text-3xl font-bold text-center mt-3">Login now!</h1>
                        <form onSubmit={handleLogin}>                           
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
                                <input type="password" placeholder="password" name='password' className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-warning text-white" type="submit" value="Sign In" />
                            </div>
                        </form>
                        <p className='my-4 text-center'>New to car doctors? <Link className='text-orange-400 font-bold' to="/signup">Sign Up</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;