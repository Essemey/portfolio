import { useState } from 'react'
import '../../styles/God.css'

export default function God({ god }) {

    const [content, setContent] = useState('ABILITIES')
    const [currentAbility, setCurrentAbility] = useState(god.abilities[0])
    const [selectedSkin, setSelectedSkin] = useState('')

    const activeButton = (c) => c === content ? 'active_button' : undefined
    const isCurrentAbility = key => key === currentAbility.key ? 'active_ability' : undefined
    //const getIndexAbility = key => key === 'Passif' ? 4 : +key - 1

    const skinModal = selectedSkin && <div id="skin_modal" onClick={() => setSelectedSkin('')} ><img src={selectedSkin} /></div>

    return <section id="god">
        <div className="god_background" style={{ backgroundImage: `url('${god.banner}')` }}>
            <div className="god_infos">
                <h1 className="god_name">{god.name}</h1>
                <h2>{god.title}</h2>
            </div>
        </div>
        <section id="specifications">
            <h4 className="design_title">Attributs</h4>
            <ul>
                {god.specifications.map(spe =>
                    <li key={spe.name}>
                        <span
                            className={`icon${spe?.iconHtml ? ' icon_html' : ' icon_url'}`}
                            style={spe?.iconUrl ? { backgroundImage: `url('${spe.iconUrl}')` } : {}}
                            dangerouslySetInnerHTML={{ __html: spe?.iconHtml }}>
                        </span>
                        {spe.name}
                    </li>
                )}
            </ul>
        </section>
        <div id="switch_container">
            <nav>
                <button onClick={() => setContent('ABILITIES')} className={activeButton('ABILITIES')}>Compétences</button>
                <button onClick={() => setContent('HISTORY')} className={activeButton('HISTORY')}>Histoire</button>
            </nav>
            {content === 'ABILITIES'
                ?
                <section id="abilities">
                    <iframe src={currentAbility.video}></iframe>
                    <nav>
                        <ol>
                            {god.abilities.map(ability =>
                                <li key={ability.key} onClick={() => setCurrentAbility(() => ({ ...ability }))} >
                                    <img src={ability.image} alt={ability.name} className={`${isCurrentAbility(ability.key)}_img`} />
                                    <span className={isCurrentAbility(ability.key)} >{ability.key}</span>
                                </li>
                            )}
                        </ol>
                    </nav>
                    <div className="description">
                        <h5>{currentAbility.name}</h5>
                        <p>{currentAbility.description.text}</p>
                        <ul>
                            {currentAbility.description.details.map((detail, index) => <li key={index}>{detail}</li>)}
                        </ul>
                    </div>
                </section>
                :
                <section id="history">
                    <p>Histoire</p>
                </section>
            }
        </div>
        <section id="skins">
            <h6 className="design_title">Skins</h6>
            {god.skins.map((skin, index) =>
                <div key={index} className="skin">
                    <img src={skin.image} onClick={() => setSelectedSkin(skin.image)} />
                    <div className="skin_details">
                        <p className="skin_title">{skin.name}</p>
                        <p className="skin_type">{skin.type}</p>
                    </div>
                </div>
            )}
        </section>
        {skinModal}
    </section>
} 