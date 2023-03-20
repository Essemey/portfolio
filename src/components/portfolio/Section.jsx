import { forwardRef } from "react";

const Section = forwardRef(({ img, title, children, ...props }, ref) => {

    return <section ref={ref}  {...props}>
        <img src={`/images/portfolio/${img.src}`} alt={img.alt} />
        <div className="description">
            <div className="description_title">
                <h3>{title}</h3>
                <h3>{title}</h3>
            </div>
            <div className="description_content">
                {children}
            </div>
        </div>
    </section>
})

export default Section;