import React from 'react';

const Question = ({quiz}) => {
    const {question, options,} = quiz;
    console.log(options)
    return (
        <div>
            <h1>Question: {question}</h1>
            <form action="">
                <input type="radio" name="" id="" />
                <label htmlFor={options[0]}></label><br />
                <input type="radio" name="" id="" />
                <label htmlFor={options[1]}></label>
            </form>
        </div>
    );
};

export default Question;