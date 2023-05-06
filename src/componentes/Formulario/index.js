import { useState, useEffect } from "react";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.module.css";
import styles from "./Formulario.module.css";
import Input from "../Input";
import BotaoEnviar from "../BotaoEnviar";
import { Link } from "react-router-dom";

function Formulario({ handleSubmit, btnText, projectData, handleRemove, id }) {
  const [project, setProject] = useState(projectData || {});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  const remove = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <form onSubmit={submit} className={styles.formulario}>
      <h2>Novo Vídeo</h2>
      <Input
        type="text"
        text="Titulo do video"
        name="name"
        placeholder="Insira o nome do video"
        handleOnChange={handleChange}
        value={project.name}
      />
      <Input
        type="video"
        text="Link do video"
        name="video"
        placeholder="Digite o link do seu video"
        handleOnChange={handleChange}
        value={project.video}
      />
      <Input
        type="img"
        text="Imagem do video"
        name="imagem"
        placeholder="Informe o endereço da imagem"
        handleOnChange={handleChange}
        value={project.imagem}
      />
      <ListaSuspensa
        name="category_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />
      <Input
        type="text"
        text="Descrição do video"
        name="descricao"
        placeholder="Descreva o conteudo do seu video"
        handleOnChange={handleChange}
        value={project.descricao}
      />
      <Input
        type="text"
        text="Codigo do video"
        name="codigo"
        placeholder="Informe o codigo do video"
        handleOnChange={handleChange}
        value={project.codigo}
      />
<div className={styles.botao}>
      <BotaoEnviar text={btnText} />

      <button  onClick={remove}>
          Excluir
        </button>

        <Link className={styles.link} to="/NovaCategoria">
          <button> Nova Categoria </button>
        </Link>
        </div>
    </form>
  );
}

export default Formulario;


