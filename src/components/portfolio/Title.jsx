import HiSVG from './svg/Hi';

export default function Title() {

    return <h1>
        <div className='sentence first_sentence'>
            <span className='word'>Enchanté<HiSVG />,</span>
            <span className='word'>je suis</span>
        </div>
        <div className='sentence second_sentence'>
            <span className='word'>Thomas</span>
            <span className='word'>Essemey</span>
        </div>
        <div className='sentence third_sentence'>
            <span className='word'>M'Bondjo</span>
            <span className='word'>Eyango</span>
        </div>
    </h1>;
}