import { useEffect, useState } from "react";

/*Ce hook permet d'avoir le meme rendu coté serveur et client pour eviter les problèmes
liés à l'hydratation, une fois le premier rendu coté client effectué on rentre dans le useEffect en on affiche 
le rendu différent qu'on voulait coté client. Ca oblige à faire deux rendu malheureusement.
*/
export const useIsClient = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return isClient;
};