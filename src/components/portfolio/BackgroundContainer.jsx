import { Children } from "react";

export default function BackgroundContainer({ id, className, children }) {

    return <div id={id} className={className}>
        {Children.map(children, child => child)}
    </div>;
} 