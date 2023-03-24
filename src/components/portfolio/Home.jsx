import { Children } from "react";

export default function Home({ children }) {

    return <main id="home">
        {Children.map(children, child => child)}
    </main>;
}
