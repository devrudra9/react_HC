import React from 'react';

const Button = ({ colour, btnName, handleClick }) => {

    return (
        <>
            <button
                className='outline-none px-5 py-2 rounded-full text-white text-xl shadow-lg'
                style={{ backgroundColor: colour }}
                onClick={handleClick}
            >
                {btnName}
            </button>
        </>
    );
};

export default Button;