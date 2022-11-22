import React from 'react';
import { Link } from 'react-router-dom';

const Carts = ({quizs}) => {
    const {id, name, logo, total} = quizs;
    return (
            <div className='border-2 rounded-md p-3'>
                <img src={logo} alt="" />
                <p className='text-xl'>{name}</p>
                <div className='flex justify-between leading-10'>
                    <p className='my-1'>Quiz: {total}</p>
                    <Link to={`/quiz/${id}`} className='border-solid border-2 rounded-lg px-2 bg-zinc-300'><small>Start Practice</small></Link>
                </div>
            </div>
    );
};

export default Carts;