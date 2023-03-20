import { useEffect, useState } from 'react'
import * as style from '../../styles/portfolio/Projects.module.css'
import { GithubSVG } from './svg/ContactCard';

export default function Projects() {

    const [projects, setProjects] = useState(null);

    useEffect(() => {
        fetch('projects.json')
            .then(r => r.json())
            .then(projects => setProjects(projects))
    }, [])

    if (!projects) {
        return "Chargement...."
    }

    return <main id={style.projects}>
        {projects.map(project =>
            <div key={project.id} className={style.project}>
                <img src={project.img[0]} alt={project.img[1]} />
                <div className={style.project_infos}>
                    <div className={style.title}>
                        <h3>{project.name}</h3>
                        <div className={style.links}>
                            <button className={style.discover}>Découvrir</button>
                            <GithubSVG />
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
}