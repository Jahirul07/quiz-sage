import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Carts from '../Carts/Carts';
import './Home.css'

const Home = () => {
    const subNames = useLoaderData();
    const {data} = subNames;
    return (
        <div>
            <div className='flex justify-center text-center'>
            <div className='width my-16'>
            <h1 className='text-5xl my-8'>Specialized tests</h1>
            <p className='text-lg'>QuizSage is the leading online quizzes for learning and fun. We have the perfect package of online quizzes and tools that help you learn efficiently and quickly.</p>
            </div>
            </div>

            <div className='grid grid-cols-4 gap-4 my-5 mx-5'>
            {
                data.map(quizs => <Carts
                key={quizs.id}
                quizs = {quizs}
                ></Carts>)
            }
            </div>
        </div>
    );
};

export default Home;