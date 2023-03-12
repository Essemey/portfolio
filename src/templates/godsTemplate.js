import { useEffect } from "react";
import useGods from "../hooks/gods";

export default function godsTemplate({ pageContext }) {

    pageContext.gods[0].new = true;

    const { gods, roles, origins, sortGods, isCurrentFilter, setGods, handleSearch } = useGods();

    useEffect(() => {
        setGods(pageContext.gods);
    }, [])

    const _gods = gods || pageContext.gods

    return _gods.length ? <ul id="gods">
        {_gods.map((god, index) =>
            <li key={god.name} className={god?.new ? 'god--new' : 'god'} style={{ backgroundImage: `url('${god.banner}')` }}
                onClick={() => setModal(s => ({ ...god }))}>
                <p className="god_name">{god.name}</p>
                <p>{god.title}</p>
                <span className={`icon${god.specifications[1]?.iconHtml ? ' icon_html' : ' icon_url'}`}
                    style={god.specifications[1]?.iconUrl ? { backgroundImage: `url('${god.specifications[1].iconUrl}')` } : {}}
                    dangerouslySetInnerHTML={{ __html: god.specifications[1]?.iconHtml }}
                ></span>
            </li>
        )}
    </ul> : <p className="not_find">Aucun Dieu ne correspond à ces critères</p>
}

/*export default function godsTemplate({ pageContext }) {

    const { gods, roles, origins, sortGods, isCurrentFilter, setGods, handleSearch } = useGods();

    useEffect(() => {
        pageContext.gods[0].new = true;
        setGods(pageContext.gods);
    }, [])

    if (!roles) {
        return null;
    }

    return <section id="gods_showcase">
        <Header roles={roles} origins={origins} sortGods={sortGods} isCurrentFilter={isCurrentFilter} handleSearch={handleSearch} />
        <h1 id="gods_title">Dieux</h1>
        <Gods gods={gods} />
    </section>
}*/