import { createContext, useEffect, useState, useMemo } from 'react';
import { useApolloClient } from '@apollo/client';

import { currentUser } from '../../graphQl/query/currentUser';

export const UserContext = createContext({ user: null, isLoading: true });

export default function User({ children }) {
  const [user, setUser] = useState({ user: null, isLoading: true });

  const client = useApolloClient();
  useEffect(() => {
    const getUser = async () => {
      setUser((cState) => ({ ...cState, isLoading: true }));
      try {
        const user = await currentUser(client);
        setUser((cState) => ({ ...cState, user: user.data.me }));
      } finally {
        setUser((cState) => ({ ...cState, isLoading: false }));
      }
    };
    getUser();
  }, []);

  const value = useMemo(() => ({ ...user, setUser }), [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
