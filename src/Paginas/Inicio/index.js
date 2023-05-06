import Banner from "../../componentes/Banner";
import Rodape from "../../componentes/Rodape";
import Menu from "../../componentes/Menu";
import Container from "../../componentes/Container";
import Card from "../../componentes/Card";

function Inicio() {
  return (
    <main>
      <Menu />
      <Banner />
      <Container customClass="start">
        <Card />
      </Container>
      <Rodape />
    </main>
  );
}

export default Inicio;
