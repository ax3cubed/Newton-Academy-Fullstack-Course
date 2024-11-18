import React from 'react';
import Greeting from './Greeeting';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header>
      <h1 className='font-bold text-2xl'>{title}</h1>
      <Greeting name={title} />
    </header>
  );
};

export default Header;