import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li style={{ color: "white"}}>
                <Link to="category/Discos"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Remeras">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Accesorios">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Playlist">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;

