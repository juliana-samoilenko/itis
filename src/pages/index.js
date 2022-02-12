import useIsAuthUser from '../global/user/useIsAuthUser';
import { useContext } from 'react';
import { UserContext } from '../global/user/user';

export default function Home() {
  useIsAuthUser();
  const { user, isLoading } = useContext(UserContext);
  return <div>
    <div>Home page</div>
    <div>{isLoading ? 'Loading' : 'Not loading'}</div>
    <div>{JSON.stringify(user, undefined, 5)}</div>
  </div>;
}
