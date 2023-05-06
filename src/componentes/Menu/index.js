import Container from "../Container";
import styles from "./Menu.module.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <Container>
      <nav className={styles.navegacao}>
        <Link className={styles.link} to="/">
          <img src="/imagens/logo.png" alt="Logo do Vr-Mundo" />
        </Link>
        <Link className={styles.link} to="/NovoVideo">
          <button> Novo Video </button>
        </Link>
      </nav>
    </Container>
  );
}
