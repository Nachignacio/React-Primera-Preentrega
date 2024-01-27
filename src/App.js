import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  let headerStyles = {
    backgroundColor: "grey",
  };
  return (
    <div>
      <header style={headerStyles}>
        <h1> Music Store </h1>
        <Nav/>
      </header>
      <ItemListContainer nombre="tarjeta" descripcion="prueba"/>
    </div>
  );
}

export default App;
