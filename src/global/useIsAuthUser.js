import { useContext } from 'react';
import { UserContext } from './user';
import { useHistory } from 'react-router-dom';
import routes from '../contstants/routes';

export default function useIsAuthUser() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  if (!user) {
    history.push(routes.LOGIN);
  }
}
