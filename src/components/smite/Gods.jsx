import { Link } from 'gatsby';
import { useState } from 'react';
import '../../styles/smite/Gods.css';
import God from './God';

export default function Gods({ gods }) {

    const [modalGod, setModal] = useState(null);

    if (modalGod) return <God god={modalGod} />

    return gods.length ? <ul id="gods">
        {gods.map((god, index) =>
            <Link key={god.name} to={`/smite/${god.name.replace(/\s+/g, '-').toLowerCase()}`} state={{ god }}>
                <li className={god?.new ? 'god--new' : 'god'} style={{ backgroundImage: `url('${god.banner}')` }}
                    onClick={() => setModal(s => ({ ...god }))}>
                    <p className="god_name">{god.name}</p>
                    <p>{god.title}</p>
                    <span className={`icon${god.specifications[1]?.iconHtml ? ' icon_html' : ' icon_url'}`}
                        style={god.specifications[1]?.iconUrl ? { backgroundImage: `url('${god.specifications[1].iconUrl}')` } : {}}
                        dangerouslySetInnerHTML={{ __html: god.specifications[1]?.iconHtml }}
                    ></span>
                </li>
            </Link>
        )}
    </ul> : <p className="not_find">Aucun Dieu ne correspond à ces critères</p>
}