import { forwardRef, useRef, useState } from "react";
import { useMediaQuery } from "../hooks/portfolio/mediaQuery";
import { useObserver } from "../hooks/portfolio/observer"
import '../styles/portfolio/index.css';
import '../styles/html.css';
import {
    ContactCard,
    Home,
    LavaBackGround,
    Menu,
    ProjectPreview,
    Projects,
    Section,
    SectionContainer,
    ShuffleText,
    TechStack,
    Title
} from "../components/portfolio";



const animationObs = {
    about: {
        self: 'appear',
        lava: 'bg_blue',
        headerBtn: 'bg_blue',
        shuffleText: { color: 'txt_yellow', text: 'Développeur Front End' }
    },
    techs: {
        self: 'appear',
        lava: 'bg_green',
        headerBtn: 'bg_green',
        shuffleText: { color: 'txt_pink', text: 'Développeur Passionné' }
    },
    contact: {
        self: 'appear',
        lava: 'bg_pink',
        headerBtn: 'bg_pink',
        shuffleText: { color: 'txt_blue', text: 'Développeur Ambitieux' }
    },
    projectPreview: {
        self: 'appear',
        lava: 'bg_grey',
        headerBtn: 'bg_grey'
    }
};


function IndexPage() {

    const aboutRef = useRef(null);
    const techsRef = useRef(null);
    const contactRef = useRef(null);
    const projectPreviewRef = useRef(null);

    const [url, switchUrl] = useState({ current: 'about', prev: null });
    const fullScreen = useMediaQuery(1280);
    const { targetUrl, animations } = useObserver([aboutRef, techsRef, contactRef, projectPreviewRef], animationObs, url, fullScreen);

    const { aboutAnimation, techsAnimation, contactAnimation, projectPreviewAnimation,
        lavaAnimation, headerBtnAnimation, shuffleTextAnimation } = animations;

    console.log('1er rendu indexPage: fullScreen Value: ', fullScreen);

    return <div id={`${url.current}_container`} className="container">
        {<LavaBackGround animation={lavaAnimation} />}
        <Home url={url} >
            <div id="titles">
                <Title />
                <ShuffleText text={shuffleTextAnimation?.text || "Développeur Front End"} className={shuffleTextAnimation?.color} />
            </div>
            <SectionContainer targetUrl={targetUrl} fullScreen={fullScreen}>
                <About ref={aboutRef} className={aboutAnimation} />
                <Techs ref={techsRef} className={techsAnimation} />
                <ProjectPreview title="Dernier Projet" img={{ src: "smite_clone.png" }} switchUrl={switchUrl}
                    id="projectPreview" ref={projectPreviewRef} className={projectPreviewAnimation} />
                <Contact ref={contactRef} className={contactAnimation} />
            </SectionContainer>
            <Menu switchUrl={switchUrl} fullScreen={fullScreen} />
        </Home>
    </div>;
};

export default IndexPage;

const About = forwardRef((props, ref) => <Section ref={ref} id="about" img={{ src: "about.png" }} title="Qui suis-je" {...props}>
    <p className="description_text">Jeune passionné par le web et les technologies qui gravitent autour;
        Cela fait maintenant plus de 3 ans que je développe différents projets essentiellement en Javascript.
        Jeune passionné par le web et les technologies qui gravitent autour;
        Cela fait maintenant plus de 3 ans que je développe différents projets en Javascript.
        Jeune passionné par le web et les technologies qui gravitent autour;
        Cela fait maintenant plus de 3 ans que je développe différents projets en Javascript.
        Cela fait maintenant plus de 3 ans que je développe différents projets en Javascript.
        Jeune passionné par le web et les technologies qui gravitent autour;
        Cela fait maintenant plus de 3 ans que je développe différents projets en Javascript.</p>
</Section>);

const Techs = forwardRef((props, ref) => <Section ref={ref} id="techs" img={{ src: "technos.png" }} title="Mes technos" {...props}>
    <TechStack />
</Section>);

const Contact = forwardRef((props, ref) => <Section ref={ref} id="contact" img={{ src: "contact.png" }} title="Faisons conaissance" {...props}>
    <ContactCard />
</Section>);

