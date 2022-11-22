import React from 'react';

const Carts = ({quizs}) => {
    const {name,logo, total} = quizs;
    return (
            <div className='border-2 rounded-md p-3'>
                <img src={logo} alt="" />
                <p className='text-xl'>{name}</p>
                <div className='flex justify-between leading-10'>
                    <p className='my-1'>Quiz: {total}</p>
                    <button className='border-solid border-2 rounded-lg px-2 bg-zinc-300'>Start Practice</button>
                </div>
            </div>
    );
};

export default Carts;