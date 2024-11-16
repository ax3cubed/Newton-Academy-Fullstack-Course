
import React from 'react';
import { useUser } from '../Contexts/UserContext';



const UserProfile: React.FC = () => {
    const { username} = useUser();
  return (
    <div className="user-profile">
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;

