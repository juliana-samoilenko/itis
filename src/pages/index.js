import useIsAuthUser from "../global/useIsAuthUser";

export default function Home() {
    useIsAuthUser();
    return <div>home</div>
}
