import styles from "./MenuSecundario.module.css";
import { Link } from "react-router-dom";

export default function MenuSecundario() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <Link className={styles.link} to="/">
          <img src="/imagens/logo.png" alt="Logo do VR-Mundo" />
        </Link>
      </nav>
    </header>
  );
}
