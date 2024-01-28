import ListItem from "./ListItem";
import Cart from "../img/cart.png";
import CartCounter from "../img/cartcounter.png";

function Nav(){
    let unorderedStyles = {
        borderStyle: "solid",
        display: "flex",
        backgroundColor: "darkcyan",
    };

    let cartStyles = {
        position: "absolute",
        top: "95px",
        right: "20px",
        height: "50px",
    };

    let shoppedCounterStyles = {
        position: "absolute",
        top: "110px",
        right: "60px",
        height: "30px",
    };

    

    return (<nav className="App">
                <ul style={unorderedStyles}>
                    <ListItem texto="Pianos"/>
                    <ListItem texto="Teclados"/>
                    <ListItem texto="Guitarras"/>
                    <ListItem texto="Baterias"/>
                    <li style={{listStyle: "none"}}>
                        <img src={Cart} style={cartStyles} alt="cart"/>
                        <img src={CartCounter} style={shoppedCounterStyles} alt="cart"/>
                    </li>
                </ul>
            </nav>)
}

export default Nav;