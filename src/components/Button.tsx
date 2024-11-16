import React from 'react';

type ButtonProps = {
    label:string;
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button className='px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 outline-1 outline-gray-50 m-1' onClick={onClick}>{label}</button>
}

export default Button;