import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Book = () => {
    const bookedData = useLoaderData()
    const { title, _id , price, img} = bookedData;
    const {user} = useContext(AuthContext)

    const  handleBookService = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
                

        const booking = {
           customerName: name,
           img,
           email,
           date,
           service: title,
           service_id: _id,
           price: price            
        }
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('booking successfull')
            }
        })
        form.reset()

    }
    return (
        <div className="card-body">
            <h1 className='text-center text-3xl font-medium mb-3'>Book Service: {title}</h1>
            <form onSubmit={handleBookService}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={user?.displayName} placeholder='Name' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name='date' className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" name='due' defaultValue={'$ ' + price} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Order Confrim" />
                </div>
            </form>
        </div>
    );
};

export default Book;