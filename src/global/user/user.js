import { createContext, useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/client';

import { currentUser } from '../../graphQl/query/currentUser';

export const UserContext = createContext({ user: null });

export default function User({ children }) {
  const [user, setUser] = useState({ user: null, isLoading: false });

  const client = useApolloClient();
  useEffect(() => {
    const getUser = async () => {
      setUser((cState) => ({ ...cState, isLoading: true }));
      const user = await currentUser(client);
      setUser((cState) => ({ ...cState, user: user.me, isLoading: false }));
    };
    getUser();
  }, []);

  return <UserContext.Provider value={{...user, setUser}}>{children}</UserContext.Provider>;
}
