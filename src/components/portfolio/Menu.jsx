import { Link } from 'gatsby';
import { useIsClient } from '../../hooks/portfolio/isClient';
import '../../styles/portfolio/Menu.css';

export default function Menu({ switchUrl, fullScreen }) {

    const isClient = useIsClient();

    if (!fullScreen || !isClient) return <></>;

    const handleClick = target => switchUrl(s => ({ ...s, prev: s.current, current: target }));

    return <nav id="nav_menu">
        <ul>
            <Link to="/projects" style={{ display: 'contents' }}><li id="nav_techs" >Projets</li></Link>
            <li id="nav_techs" onClick={() => handleClick("techs")}>Technos</li>
            <li id="nav_contact" onClick={() => handleClick("contact")}>Contact</li>
            <li id="nav_about" onClick={() => handleClick("about")}>à Propos</li>
        </ul>
    </nav>;
};

/* <Link to="/projects" style={{ display: 'contents' }}></Link>*/