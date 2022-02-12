import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import useIsAuthUser from '../global/user/useIsAuthUser';
import { UserContext } from '../global/user/user';

export default function Home() {
  useIsAuthUser();
  const { user, isLoading, setUser } = useContext(UserContext);
  const client = useApolloClient();
  const handleLogoutClick = async () => {
    setUser((cState) => ({ ...cState, user: null, isLoading: false }));
    localStorage.clear();
    await client.cache.reset();
  };

  return (
    <div>
      <div>Home page</div>
      <button type="button" onClick={handleLogoutClick}>
        logout
      </button>
      <div>{isLoading ? 'Loading' : 'Not loading'}</div>
      <div>{JSON.stringify(user, undefined, 5)}</div>
    </div>
  );
}
