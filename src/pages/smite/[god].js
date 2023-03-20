import { useMatch } from '@reach/router'
import { navigate } from 'gatsby';
import { useEffect, useState } from 'react';
import God from '../../components/smite/God';

let needFetch = false;

const correctName = name => name.replace(/\s+/g, '-').toLowerCase()

const isValidUrl = (match, gods) => {
    if (!match) return false;
    return gods.find(god => match.godName === correctName(god.name))
}

export default function GodRouter({ location }) {

    const [gods, setGods] = useState(null)
    const match = useMatch('/smite/:godName')

    useEffect(() => {
        if (needFetch) {
            console.log('la')
            fetch('/data/gods.json')
                .then(data => data.json())
                .then(gods => setGods(gods))
            needFetch = false;
        }
    }, [])

    if (location.state?.god) {
        return <God god={location.state.god} />
    }
    //If we don't access to this page by Link
    if (!location.state && !gods) needFetch = true

    if (needFetch) return

    const god = isValidUrl(match, gods)

    return god ? <God god={god} /> : navigate('/smite')

}