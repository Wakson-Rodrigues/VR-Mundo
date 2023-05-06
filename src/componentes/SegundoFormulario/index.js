import { useState } from "react";

import Input from "../../componentes/Input";
import "./SegundoFormulario.css";

export default function SegundoFormulario(cadastrarTime) {
  const [nome, setNome] = useState("");
  const [cor, setCor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [codigo, setCodigo] = useState("");
  return (
    <section>
      <form
        className="formulario"
        onSubmit={(evento) => {
          evento.preventDefault();

          cadastrarTime({
            nome: nome,
            cor: cor,
            descricao: descricao,
            codigo: codigo,
          });
        }}
      >
        <div className="formulario-container">
          <h2>Preencha os dados para criar um novo time.</h2>
          <Input
            text="Titulo do video"
            label="Nome"
            placeholder="Digite o nome do time"
            valor={nome}
            aoAlterado={(valor) => setNome(valor)}
          />
          <Input
            text="Descricao"
            placeholder="Digite o descricao do video"
            valor={descricao}
            aoAlterado={(valor) => setDescricao(valor)}
          />
          <Input
            text="Cor"
            type="color"
            label="cor"
            valor={cor}
            aoAlterado={(valor) => setCor(valor)}
          />
          <Input
            text="Codigo de segurança"
            label="codigo"
            placeholder="Digite o codigo de segurança"
            valor={codigo}
            aoAlterado={(valor) => setCodigo(valor)}
          />
        </div>

        <div className="botao">
          <div className="salvar">
            <button>Salvar</button>
          </div>
          <div className="limpar">
            <button>Limpar</button>
          </div>
        </div>
      </form>
    </section>
  );
}
