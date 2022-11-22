import React from 'react';

const Carts = ({quizs}) => {
    const {name,logo, total} = quizs;
    return (
            <div className='border-2 rounded-md p-3'>
                <img src={logo} alt="" />
                <p className='text-xl'>{name}</p>
                <div>
                    <p>Quiz: {total}</p>
                    <button className=''>Start Practice</button>
                </div>
            </div>
    );
};

export default Carts;