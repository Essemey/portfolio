import '../../styles/portfolio/LavaBackGround.css';

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
    </>;
}


