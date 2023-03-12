import Filter from "./Filter";
import SearchBar from "./SearchBar";


export default function Header({ roles, origins, sortGods, isCurrentFilter, handleSearch }) {


    return <header>
        <Filter label="Panthéon" name="origins" data={origins} sortGods={sortGods} isCurrentFilter={isCurrentFilter} />
        <Filter label="Roles" name="roles" data={roles} sortGods={sortGods} isCurrentFilter={isCurrentFilter} />
        <SearchBar handleSearch={handleSearch} sortGods={sortGods} />
    </header>
}