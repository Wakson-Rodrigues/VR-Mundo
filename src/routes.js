import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./Paginas/Inicio";
import NovoVideo from "./Paginas/NovoVideo";
import NovaCategoria from "./Paginas/NovaCategoria";
import Container from "./componentes/Container";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Container customClass="min-heinght">
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/NovoVideo" element={<NovoVideo />} />
          <Route path="/NovaCategoria" element={<NovaCategoria />} />
  
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
export default AppRoutes;
