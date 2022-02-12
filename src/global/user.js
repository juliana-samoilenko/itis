import {createContext, useState} from 'react';

export const UserContext = createContext({user: null});


export default function User({children}) {
    const [user] = useState({user: null});

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}
