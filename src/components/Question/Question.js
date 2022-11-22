import React from 'react';

const Question = ({quiz}) => {
    const {question, options,} = quiz;
    console.log(options)
    return (
        <div className='flex'>
            <div className='border-2 w-4/5 my-4 mx-5 p-10 rounded-lg shadow-md'>
            <h1 className='text-xl font-medium'>Question: {question}</h1>
            <form className='font-normal' action="">
                
                <label ><input type="radio" name="radio" id="" />{options[0]}</label><br />
                
                <label ><input type="radio" name="radio" id="" />{options[1]}</label><br />
                
                <label ><input type="radio" name="radio" id="" />{options[2]}</label><br />
                
                <label ><input type="radio" name="radio" id="" />{options[3]}</label><br />
            </form>
            </div>
            <div className='w-1/5'>

            </div>
        </div>
    );
};

export default Question;