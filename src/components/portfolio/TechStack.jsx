import * as Icons from './svg/TechStack';
import * as style from '../../styles/portfolio/TechStack.module.css';

const frontValid = ['JavaScript', 'React', 'Angular', 'Gatsby', 'Next.js', 'Redux'];
const backValid = ['Node.js', 'Express', 'Koa', 'Firebase', 'TypeScript', 'GraphQL', 'MySQL', 'MongoDB', 'Prisma'];

const front = [];
const back = [];

for (const key in Icons) {
    const element = frontValid.find(el => key.startsWith(el.substring(0, 3)));
    if (element) {
        front.push({ componentName: key, textName: element });
    } else {
        const element = backValid.find(el => key.startsWith(el.substring(0, 3)));
        element && back.push({ componentName: key, textName: element });
    }
}
const render = array => array.map((element, key) => <div className={style.icon_wrapper} key={key}>
    {Icons[`${element.componentName}`]()}
    <p>{element.textName}</p>
</div>);


export default function TechStack() {

    return <div id={style.tech_stack}>
        <div id={style.front}>
            <div className={style.icons_wrapper}>
                {render(front)}
            </div>
        </div>
        <div id={style.back}>
            <div className={style.icons_wrapper}>
                {render(back)}
            </div>
        </div>
    </div>;
}