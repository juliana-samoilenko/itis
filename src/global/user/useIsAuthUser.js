import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './user';
import routes from '../../constants/routes';

export default function useIsAuthUser() {
  const { user } = useContext(UserContext);
  const history = useHistory();
  if (!user) {
    history.push(routes.LOGIN);
  }
}
