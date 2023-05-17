import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id,img, title, price } = service
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex justify-between'>
                    <h2 className='text-xl text-orange-600 font-bold'>Price: ${price}</h2>
                    <Link to={`/book/${_id}`}>
                        <FaArrowRight className='text-orange-600'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;