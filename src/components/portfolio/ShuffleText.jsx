import { useEffect, useState, useRef } from "react";

function ShuffleChar({ char, index, stop }) {

    const characters = "#[](){}@%£$?!:;<>+*-&AZERTYUIOPQSDFGHJKLMWXCVBN€";

    const [newChar, setNewChar] = useState(char);
    const inter = useRef(null);

    useEffect(() => {
        inter.current = setInterval(() => setNewChar(shuffle(char)), 100);
        return () => clearInterval(inter.current);
    }, []);

    useEffect(() => {
        if (index === stop) {
            clearInterval(inter.current);
            setNewChar(char);
        }
    }, [stop]);

    const shuffle = (char) => {

        const indexC = Math.floor(Math.random() * characters.length);
        const letterC = characters.charAt(indexC);
        const modifyChar = char.replace(char, letterC);

        return modifyChar;
    };

    return <>{newChar}</>;
}

function ShuffleText({ text, className }) {

    const [stop, setStop] = useState(-1);
    const inter = useRef(null);

    useEffect(() => {
        if (stop !== -1) setStop(-1);
        inter.current = setInterval(() => setStop(s => s + 1), 250);
        return () => clearInterval(inter.current);
    }, [text]);

    useEffect(() => {
        if (stop === text.length) clearInterval(inter.current);
    }, [stop]);


    if (stop === -1) return <h2>{text}</h2>

    return <h2 className={className}>{[...text].map((char, index) =>
        char !== ' '
            ?
            <ShuffleChar key={index} char={char} stop={stop} index={index} />
            : ' '
    )}</h2>;
}

export default ShuffleText;