import styles from "./Menu.module.css";
import Link from "next/link";
import Button from "../Button/Button";

export default function Menu(props) {
  return (
    <ul className={styles.menu}>
      <li>
        <Link className={styles[props.variant]} href="#company">
          A empresa
        </Link>
      </li>
      <li>
        <Link className={styles[props.variant]} href="#services">
          Serviços
        </Link>
      </li>
      <li>
        <Link className={styles[props.variant]} href="#projects">
          Projetos
        </Link>
      </li>
      <li>
        <Link className={styles[props.variant]} href="#contact">
          Contato
        </Link>
      </li>
      <li>
        <Link className={styles[props.variant]} href="#informations">
          Informações
        </Link>
      </li>
    </ul>
  );
}
