import React from 'react';

type ButtonProps = {
    label:string;
    onClick: () => void
}
 
 

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button className='rounded-lg border border-transparent bg-[var(--btn-color)] text-[var(--background-color)] px-4 py-2 text-base font-medium  m-[2px]' onClick={onClick}>{label}</button>
}

export default Button;