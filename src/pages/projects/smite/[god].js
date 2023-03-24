import { useMatch } from '@reach/router';
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';
import { SEO } from '../../../components/Seo';
import God from '../../../components/smite/God';
import '../../../styles/smite/html.css';

let needFetch = false;

const correctName = name => name.replace(/\s+/g, '-').toLowerCase();

const isValidUrl = (match, gods) => {
    if (!match) return false;
    return gods.find(god => match.godName === correctName(god.name));
};

export default function GodRouter({ location }) {

    const [gods, setGods] = useState(null);
    const match = useMatch('/projects/smite/:godName');

    useEffect(() => {
        if (needFetch) {
            fetch('/data/gods.json')
                .then(data => data.json())
                .then(gods => setGods(gods))
            needFetch = false;
        }
    }, []);

    if (location.state?.god) {
        return <God god={location.state.god} />;
    }
    //If we don't access to this page by Link
    if (!location.state && !gods) needFetch = true;

    if (needFetch) return;

    const god = isValidUrl(match, gods);

    return god ? <God god={god} /> : navigate('/projects/smite');

}

export const Head = () => (
    <SEO />
);