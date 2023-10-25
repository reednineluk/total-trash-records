import brand from "../../img/brand.svg";
import { Link } from "react-router-dom"

const Brand = () => {
    return(
        <Link to="/">
            <img src={brand} alt="Total Trash Records" title="Total Trash Records"></img>
        </Link>
    )
}

export default Brand;