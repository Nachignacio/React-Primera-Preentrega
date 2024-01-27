import ListItem from "./ListItem";
import Logo from "../img/pedals.png"

function Nav(){
    let unorderedStyles = {
        borderStyle: "solid",
        display: "flex",
        backgroundColor: "darkcyan",
    };

    let logoStyles = {
        position: "absolute",
        right: "5vw",
        height: "75px",
        width: "75px",
    };

    return (<nav className="App">
                <ul style={unorderedStyles}>
                <ListItem texto="Pianos"/>
                <ListItem texto="Teclados"/>
                <ListItem texto="Guitarras"/>
                <ListItem texto="Baterias"/>
                <li style={{listStyle: "none"}}>
                    <img src={Logo} alt="logo" style={logoStyles}/>
                </li>
            </ul>
            
        
    </nav>)
}

export default Nav;