import MenuSecundario from "../../componentes/MenuSecundario";
import Rodape from "../../componentes/Rodape";
import SegundoFormulario from "../../componentes/SegundoFormulario";
import Tabela from "../../componentes/Tabela";
import styles from "./NovaCategoria.module.css";
function NovaCategoria() {
  return (
    <>
      <div className={styles.novacategoria_container}>
        <MenuSecundario />
        <div className={styles.formulario}>
          <SegundoFormulario />
        </div>
        <Tabela />
        <Rodape />
      </div>
    </>
  );
}

export default NovaCategoria;
