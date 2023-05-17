import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext)

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(result =>{})
        .catch(error =>{})
    }
    return (
        <div>
            <h1 className='divider'>OR</h1>
            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                   G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;