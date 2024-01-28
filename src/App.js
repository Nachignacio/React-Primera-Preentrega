import Nav from "./components/Nav";
import ItemListContainer from "./components/ItemListContainer";
import Logo from "./img/pedals.png";
import Piano from "./img/kawaies110.jpg";

function App() {
  let headerStyles = {
    backgroundColor: "grey",
  };

  let logoStyles = {
    position: "absolute",
    right: "2vw",
    top: "15px",
    height: "75px",
    width: "75px",
  };

  return (
    <div>
      <header style={headerStyles}>
        <h1> Music Store </h1>
        <img src={Logo} alt="logo" style={logoStyles}/>
        <Nav/>
      </header>
      <ItemListContainer nombre="Kawai ES110" image={Piano} descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare maximus vehicula. Duis nisi velit, dictum id mauris vitae, lobortis pretium quam. Quisque sed nisi pulvinar, consequat justo id, feugiat leo. Cras eu elementum dui."/>
    </div>
  );
}

export default App;
