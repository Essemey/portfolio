import { Children } from "react";

export default function BackgroundContainer({ id, children }) {

    return <div id={id}>
        {Children.map(children, child => child)}
    </div>;
} 