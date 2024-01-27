function ItemListContainer({nombre, descripcion}){
    let ItemListContainerStyles = {
        height: "500px",
        width: "500px",
    };

    return(
        <section>
            <div style = {ItemListContainerStyles}>
                {nombre}
                <p>
                    {descripcion}
                </p>
            </div>
        </section>
    )
}

export default ItemListContainer;