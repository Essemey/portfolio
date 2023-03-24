import { Link } from "gatsby";
import { forwardRef } from "react"


const ProjectPreview = forwardRef(({ img, title, switchUrl, ...props }, ref) => {

    return <section ref={ref}  {...props}>
        <div className="img_wrapper">
            <img src={`/images/projects/${img.src}`} alt={img.alt} />
        </div>
        <div className="description">
            <div className="description_content">
                <Link to="/projects">
                    <button>
                        Voir tous les projets
                    </button>
                </Link>
            </div>
        </div>
    </section>;
});

export default ProjectPreview;