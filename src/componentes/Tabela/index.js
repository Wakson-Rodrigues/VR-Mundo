import styles from "./Tabela.module.css";

function Tabela({ id, name, descricao, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <div>
        <h4>{name}</h4>
      </div>
      <div>
        <h4>{descricao}</h4>
      </div>

      <div className={styles.tabela}>
        <div className={styles.nome}>
          <h5>Nome</h5>
          <p>espaço</p>
          <p>montanhas</p>
          <p>oceano</p>
        </div>
        <div className={styles.descricao}>
          <h5>Descrição</h5>
          <p> tenha a experiencia de explorar o espaço numa viagem incrivel</p>
          <p>escale as mais altas e incriveis montanhas do mundo</p>
          <p>mergulhe e decubra um mundo no fundo do mar</p>
        </div>
        <div className={styles.editar}>
          <h5>Editar</h5>
          <button className={styles.link} to="/NovoVideo">
            Editar
          </button>
          <button className={styles.link} to="/NovoVideo">
            Editar
          </button>
          <button className={styles.link} to="/NovoVideo">
            Editar
          </button>
          <button className={styles.link} to="/NovoVideo">
            Editar
          </button>
        </div>
        <div className={styles.remover}>
          <h5>Remover</h5>
          <button className={styles.link} onClick={remove}>
            Remover
          </button>
          <button className={styles.link} onClick={remove}>
            Remover
          </button>
          <button className={styles.link} onClick={remove}>
            Remover
          </button>
          <button className={styles.link} onClick={remove}>
            Remover
          </button>
        </div>
      </div>
    </div>
  );
}
// project = novovideo
export default Tabela;
