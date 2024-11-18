
import React from 'react';
import { useUser } from '../Contexts/UserContext';



const UserProfile: React.FC = () => {
    const { username} = useUser();
  return (
    <div>
      <p className='text-base'>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;

