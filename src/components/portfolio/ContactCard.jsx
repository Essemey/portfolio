import * as style from '../../styles/portfolio/ContactCard.module.css';
import * as Icons from './svg/ContactCard';

const icons = [
    { componentName: 'GithubSVG', link: 'https://github.com/Essemey', textName: 'GitHub' },
    { componentName: 'LinkedinSVG', link: 'https://www.linkedin.com/in/thomas-m-bondjo-eyango-a2b309188', textName: 'LinkedIn' },
    { componentName: 'GmailSVG', link: 'mailto:essemeymbondjo@gmail.com', textName: 'essemeymbondjo@gmail.com' },
    { componentName: 'PhoneSVG', link: 'tel:+33619654130', textName: '06 19 65 41 30' }
];

export default function ContactCard() {

    return <div id={style.contact_card}>
        <p>Ouvert à tous types de projets et technologies. Je recherche principalement un CDI, mais suis ouvert au portage salarial.
            Si vous avez une question ou l'envie d'en apprendre plus, n'hesitez pas à me contacter !
        </p>
        <div className={style.contact_links}>
            {icons.map((icon, index) =>
                <a key={index} className={style.icon_wrapper} href={icon.link} data-tooltip={icon.textName}
                    target="_blank" rel="noopener noreferrer">
                    {Icons[`${icon.componentName}`]()}
                </a>
            )}
        </div>
    </div>;
}