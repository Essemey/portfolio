import '../../styles/portfolio/Home.css';
import { Children } from 'react';
import { useIsClient } from '../../hooks/portfolio/isClient';

export default function SectionContainer({ targetUrl, fullScreen, children }) {

    const isClient = useIsClient();

    if (fullScreen && isClient) {
        switch (targetUrl) {
            case 'about':
                return children[0];
            case 'techs':
                return children[1];
            case 'contact':
                return children[3];
        }
    }

    return <>
        {Children.map(children, child => child)}
    </>;
}
