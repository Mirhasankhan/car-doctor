import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import BookingRow from './BookingRow';
import { useNavigate } from 'react-router-dom';

const Bookings = () => {
    const { user } = useContext(AuthContext)
    const [booking, setBooking] = useState([])
    const navigate = useNavigate()
    const url = `http://localhost:5000/bookings?email=${user?.email}`

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('car-access-token')}` 
            }
        })
            .then(res => res.json())
            .then(data => {
                if(!data.error){
                    setBooking(data)
                }
                else{
                    navigate('/')
                }
            })
    }, [url])

    
    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = booking.filter(book => book._id !== id)
                    setBooking(remaining)
                })
        }
    }

    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                const remaining = booking.filter(book => book._id !== id)
                const updated = booking.find(book => book._id == id);
                updated.status = 'confirm'
                const newBookings = [update, ...remaining]
                setBooking(newBookings)
            }
        })
    }
    return (
        <div>
            <h1 className='text-4xl text-center mb-4'>Your Bookings: {booking.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        {
                            booking.map(book => <BookingRow 
                                key={book._id} 
                                booking={book}
                                handleDelete={handleDelete}
                                handleConfirm={handleConfirm}
                                ></BookingRow>)
                        }                                                       
                    </tbody>                    
                </table>
            </div>
        </div>
    );
};

export default Bookings;