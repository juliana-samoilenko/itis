import useIsAuthUser from '../global/user/useIsAuthUser';

export default function Home() {
  useIsAuthUser();
  return <div>home</div>;
}
