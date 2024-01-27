function ListItem({texto}){
    let listStyle = {
        borderStyle: "none",
        height: "40px",
        paddingTop: "30px",
        listStyle: "none",
        width: "10vw",
        justifyText: "center",
        textAlign: "center",
    };
    return(
        <li style={listStyle}>{texto}</li>
    )
}

export default ListItem;