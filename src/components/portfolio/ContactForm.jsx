import { useEffect, useRef, useState } from 'react';
import * as style from '../../styles/portfolio/ContactCard.module.css';
import { ExclamationMark } from './svg/ExclamationMark';

const fields = ['name', 'email', 'subject', 'message'];

const checkField = field => {
    switch (field.name) {
        case 'email': if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(field.value)) {
            return "L'email renseignée ne correspond pas au standard";
        }
            break;
        case 'message': if (!(/^.{1,2500}$/).test(field.value) || !field.value) {
            return 'Le champ "Message" ne peut pas dépasser 2500 caractères ni être vide';
        }
            break;
        default: if (!(/^.{1,150}$/).test(field.value) || !field.value) {
            return `Le champ "${field.name === 'name' ? 'Nom & Prénom' : 'Sujet'}" ne peut pas dépasser 150 caractères ni être vide`;
        }
    }
    return null;
}

export default function ContactForm() {

    const [message, setMessage] = useState({ visible: false, btnValue: 'Écrire un message...' });
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const formDataObj = Object.fromEntries(formData.entries());

        const errors = {};

        //Si jamais on change les attributs name des inputs alors on bloque l'envoi
        for (let i = 0; i < fields.length; i++) {
            if (fields[i] !== Object.keys(formDataObj)[i]) return;
            const res = checkField({ name: fields[i], value: formDataObj[fields[i]] });
            if (res) errors[fields[i]] = res;
        }
        if (Object.keys(errors).length) return setErrors(() => errors);

        fetch("https://getform.io/f/dc7c6b21-5bbe-4ee7-97fd-e7e667779b6b", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            }
        })
            .then(res => {
                setErrors(() => ({}));
                if (res.ok) {
                    setSuccess(true);
                    setOpen(false);
                    e.target.reset();
                    return;
                }
                throw new Error(res);
            })
            .catch(error => setErrors(() => ({ form: "Une erreur est survenue lors de l'envoie du formulaire, veuillez réessayer" })));
    }


    const handleMessage = () => setMessage(s =>
    ({
        ...s,
        visible: !s.visible,
        btnValue: !s.visible ? 'Enregistrer' : 'Écrire un message...'
    }));

    const dataError = fieldName => errors.hasOwnProperty(fieldName) ? errors[fieldName] : null;

    const SuccessMessage = () => {

        const timer = useRef(null);

        useEffect(() => {

            timer.current = setTimeout(() => setSuccess(false), 5000);

            return () => clearTimeout(timer)
        }, []);

        return <p className={style.popup} id={style.success_msg}>Votre message à bien été envoyé. J'apporterai une réponse au plus vite !</p>
    }

    return <form onSubmit={(e) => handleSubmit(e)} id={style.contact_form}>
        <div id={style.contact_form_header}>
            <input type="text" placeholder="Nom & Prénom" name="name" data-error={dataError('name')} />
            <input type="email" placeholder="Email" name="email" data-error={dataError('email')} />
        </div>
        <div id={style.contact_form_body}>
            <input type="text" placeholder="Sujet" name="subject" data-error={dataError('subject')} />
            <div id={style.contact_form_footer}>
                <div id={style.msg_container} className={message.visible ? style.visible : null} >
                    <textarea placeholder="Message" name="message" ></textarea>
                    <button type="button" id={style.contact_msg_btn} onClick={handleMessage} data-error={dataError('message')}>
                        {message.btnValue}
                    </button>
                </div>
                {Object.keys(errors).length
                    ? <ExclamationMark id={style.exclamation_errors} onClick={() => setOpen(s => !s)} />
                    : null
                }
                <button id={style.contact_submit_btn} type="submit">Envoyer</button>
            </div>
        </div>
        {open &&
            <div id={style.recap_errors} onMouseLeave={() => setOpen(false)} className={style.popup}>
                <ul>
                    {Object.keys(errors).map(errorKey => <li key={errorKey}>{errors[errorKey]}</li>)}
                </ul>
            </div>
        }
        {success && <SuccessMessage />}
    </form>;
}