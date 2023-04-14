import * as style from '../../styles/portfolio/ContactCard.module.css';
import * as Icons from './svg/ContactCard';
import ContactForm from './ContactForm';

const icons = [
    { componentName: 'GithubSVG', link: 'https://github.com/Essemey', textName: 'GitHub' },
    { componentName: 'LinkedinSVG', link: 'https://www.linkedin.com/in/thomas-m-bondjo-eyango-a2b309188', textName: 'LinkedIn' },
    { componentName: 'GmailSVG', link: 'mailto:essemeymbondjo@gmail.com', textName: 'essemeymbondjo@gmail.com' },
    { componentName: 'PhoneSVG', link: 'tel:+33619654130', textName: '06 19 65 41 30' }
];

export default function ContactCard() {

    return <div id={style.contact_card}>
        <p>Je suis ouvert à tous types de projets et technologies. Si vous souhaitez mener à bien un projet avec un développeur
            bienveillant et à l'écoute alors je suis l'homme qu'il vous faut. N'attendez plus et envoyez moi un message qu'on puisse donner vie à vos idées !
        </p>
        <ContactForm />
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


