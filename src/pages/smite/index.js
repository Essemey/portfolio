import { useEffect } from "react";
import Gods from "../../components/smite/Gods";
import Header from "../../components/smite/Header";
import godsData from "../../../static/data/gods.json"
import useGods from "../../hooks/smite/gods";
import '../../styles/smite/index.css'

export default function IndexPage() {

    console.log('here')

    godsData[0].new = true;

    const { gods, roles, origins, sortGods, isCurrentFilter, setGods, handleSearch } = useGods();
    //const [modalGod, setModal] = useState(null);

    useEffect(() => {
        setGods(godsData);
    }, [])

    const _gods = gods || godsData

    return <section id="gods_showcase">
        <Header roles={roles} origins={origins} sortGods={sortGods} isCurrentFilter={isCurrentFilter} handleSearch={handleSearch} />
        <h1 id="gods_title">Dieux</h1>
        <Gods gods={_gods} />
    </section>
}