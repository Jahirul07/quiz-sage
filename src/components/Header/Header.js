import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav className='flex justify-between drop-shadow-lg bg-gray-50 nav-container items-center'>
            <div className='nav-left'>
                <h2 className='text-2xl font-semibold mx-5 text-rose-600'>QuizSage</h2>
            </div>
            <div className='nav-right font-medium text-md mx-5'>
            <Link to='/'>Home</Link>
            <Link to='/statistics'>Statistics</Link>
            <Link to='/blogs'>Blogs</Link>
            </div>
        </nav>
    );
};

export default Header;