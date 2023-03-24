import { useEffect, useState } from 'react';
import * as style from '../../styles/portfolio/Projects.module.css';
import { GithubSVG } from '../../components/portfolio/svg/ContactCard';
import projectsData from '../../../static/data/projects.json';
import '../../styles/portfolio/html.css';
import { Link } from '@reach/router';
import LavaBackGround from '../../components/portfolio/LavaBackGround';
import { BackgroundContainer } from '../../components/portfolio';
import { SEO } from '../../components/Seo';

const isExtLink = link => link.startsWith('http') ? true : false;

export default function Projects() {

    const [projects, setProjects] = useState(null);

    useEffect(() => { setProjects(projectsData) }, []);

    const _projects = projects || projectsData;

    return <BackgroundContainer id={style.projects_background_container}>
        <main id={style.projects}>
            {_projects.map(project =>
                <div key={project.id} className={style.project}>
                    <img src={`/images/projects/${project.img[0]}`} alt={project.img[1]} />
                    <div className={style.project_infos}>
                        <div className={style.title}>
                            <h3>{project.name}</h3>
                            <div className={style.links}>
                                {project.links?.url && isExtLink(project.links?.url)
                                    ?
                                    <a href={project.links.url} className={style.discover} target="_blank" rel="noopener noreferrer">Découvrir</a>
                                    : project.links?.url && !isExtLink(project.links?.url)
                                    &&
                                    <Link to={project.links.url} className={style.discover}>Découvrir</Link>}
                                {project.links?.github &&
                                    <a href={project.links.github} style={{ display: 'contents' }}
                                        target="_blank" rel="noopener noreferrer"><GithubSVG /></a>}
                            </div>
                            <p className={style.subtitle}>{project.subtitle}</p>
                        </div>
                        {project.tags.length && <ul className={style.tags}>
                            {project.tags.map((tag, index) => <li key={index} className={style[tag]}>{tag}</li>)}
                        </ul>}
                        <div className={style.description_container}>
                            <p className={style.description}>{project.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </main>
        <LavaBackGround animation="bg_grey" />
    </BackgroundContainer>;
}

export const Head = () => (
    <SEO />
);