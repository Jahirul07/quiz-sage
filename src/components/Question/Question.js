import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiFillEye } from 'react-icons/ai';

const Question = ({quiz}) => {
    const {question, options, correctAnswer} = quiz;
    const eyeClick = () =>{
        toast.success(`${correctAnswer}`, {
            position: toast.POSITION.TOP_CENTER
        });
    }
    const handleRightClick = value =>{
        if(value === correctAnswer){
            toast.success('Right Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else{
            toast.error('Wrong Answer !', {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }
    return (
            <div className='flex justify-center'>
            <div className='border-2 w-4/5 my-4 mx-5 p-10 rounded-lg shadow-md'>
            <div className='flex justify-between'>
            <p className='text-xl font-medium'>Question: {question}</p>
            <p onClick={eyeClick} className='text-2xl'><AiFillEye/></p>
            </div>
            <div className='font-normal m-5'>
                {
                    options.map((option, index) => <li className='cursor-pointer' onClick={() => handleRightClick(option)} key={index}>{option}</li>)
                }
                <ToastContainer></ToastContainer>
            </div>
            </div>
            </div>
    );
};

export default Question;