import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./Rodape.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>VR MUNDO</span> &copy; 2023
      </p>
      <p className={styles.desenvolvedor}>Desenvolvido por Wakson Rodrigues</p>
    </footer>
  );
}

export default Footer;
