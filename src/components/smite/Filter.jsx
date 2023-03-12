

export default function Filter({ name, label, data, sortGods, isCurrentFilter }) {


    return <div id={name}>
        <p className='title'>{label}</p>
        <ul className='filter_list'>
            {data.map((item, index) => <li key={index} data-tooltip={data[index].name}>
                <span onClick={() => sortGods(name.toUpperCase(), item.name)}
                    className={`icon${item?.iconHtml ? ' icon_html' : ' icon_url'} 
                    ${isCurrentFilter(name, data[index].name) ? ' icon_active' : ''}`}
                    style={item?.iconUrl ? { backgroundImage: `url('${item.iconUrl}')` } : {}}
                    dangerouslySetInnerHTML={{ __html: item?.iconHtml }}>
                </span>
            </li>)}
        </ul>
    </div>
}