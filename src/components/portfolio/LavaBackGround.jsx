import ReactDOM from 'react-dom';
import '../../styles/portfolio/LavaBackGround.css';


/*const isSSR = typeof document === 'undefined' ? true : false;

const LavaLamp = ({ animation }) => {

    return <>
        <div className="lamp" id="lava_lamp">
            <div className="lava">
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob top ${animation}`}></div>
                <div className={`blob bottom ${animation}`}></div>
            </div>
        </div>
        <svg id="lava_svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
    </>
}

export default function LavaBackGround({ animation }) {

    return !isSSR
        ? ReactDOM.createPortal(<LavaLamp animation={animation} />, document.querySelector('body'))
        : <LavaLamp animation={animation} />
}*/

export default function LavaBackGround({ animation }) {


    return <>
        <div className="lamp" id="lava_lamp">
            <div className="lava">
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob ${animation}`}></div>
                <div className={`blob top ${animation}`}></div>
                <div className={`blob bottom ${animation}`}></div>
            </div>
        </div>
        <svg id="lava_svg" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
    </>
}


