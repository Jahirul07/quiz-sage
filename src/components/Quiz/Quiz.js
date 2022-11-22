import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quizzes = useLoaderData();
    const {questions} = quizzes.data;
    // console.log(questions)
    // console.log(quizzes)
    return (
        <div>
            <h2 className='text-4xl text-center my-10'>Question of {quizzes.data.name}</h2>
            {
                questions.map(quiz => <Question
                key={quiz.id}
                quiz={quiz}
                ></Question>)
            }
        </div>
    );
};

export default Quiz;