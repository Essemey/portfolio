export default function SearchBar({ handleSearch, sortGods }) {

    return <div className="filter_search">
        <input type="text" placeholder="Chercher parmi les dieux..."
            onChange={(e) => {
                handleSearch(e.target.value.toLowerCase())
                sortGods('SEARCH')
            }} />
    </div>
}