import { useEffect, useState } from "react";

const isSSR = typeof window === 'undefined' ? true : false;

export const useMediaQuery = pxSize => {

    const mediaQ = !isSSR ? window.matchMedia(`(min-width: ${pxSize}px)`) : null;

    const defaultFullScreen = !isSSR ? (window.innerWidth >= pxSize ? true : false) : false;
    const [fullScreen, setFullScreen] = useState(defaultFullScreen);

    const handleMediaQuery = () => mediaQ.matches ? setFullScreen(true) : setFullScreen(false);

    useEffect(() => {

        mediaQ.addEventListener("change", handleMediaQuery);

        return () => {
            mediaQ.removeEventListener("change", handleMediaQuery);
        };
    }, [])



    return fullScreen;
}