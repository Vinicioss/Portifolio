import {NavLinkConteiner} from './styles';
import Link from 'next/link';
import { useRouter } from 'next/router'

interface Props {
    title: string;
    path: string;
    includes?: boolean;
}

export default function NavLink({title, path, includes = false}: Props) {

    const router = useRouter();

    function verifyIfIsActive() {
        if(includes) {
            return router.pathname.includes(path);
        }
        return path === router.pathname;
    }
    
    const isActive = verifyIfIsActive();

    return (
        <NavLinkConteiner isActive={isActive}>
            <Link href={path}>
                <a>{title}</a>
            </Link>
        </NavLinkConteiner>
    );
}