import styles from "./Button.module.css";
import { PlusCircle } from "phosphor-react";

export function Button() {
  return (
    <a href="#" className={styles.button}>
      <span>Criar</span>
      <PlusCircle size={16} className={styles.plusCircle} />
    </a>
  );
}
