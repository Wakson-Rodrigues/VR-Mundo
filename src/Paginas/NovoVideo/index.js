import Formulario from "../../componentes/Formulario";
import MenuSecundario from "../../componentes/MenuSecundario";
import Rodape from "../../componentes/Rodape";

import styles from "./NovoVideo.module.css";

function NovoVideo() {
  function createPost(project) {
    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className={styles.novovideo_container}>
      <MenuSecundario />
      <div className={styles.formulario}>
        <Formulario handleSubmit={createPost} btnText="Criar Video" />
      </div>
      <Rodape />
    </div>
  );
}
export default NovoVideo;
