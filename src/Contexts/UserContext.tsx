import React, {createContext, ReactNode, useContext, useState} from "react";

type UserContextType = {
    username:string;
    setUsername: React.Dispatch<React.SetStateAction<string>>
}

const UserContext = createContext<UserContextType | undefined>(undefined);


export const UserProvider : React.FC<{children: ReactNode}> = ({ children}) =>{
    const [username, setUsername] = useState<string>("Adeola");
    return (
        <UserContext.Provider value={{username, setUsername}}>
        {children}
        </UserContext.Provider>
    )
}

export const useUser = (): UserContextType => {
    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be within a Provider");
    return context;
}