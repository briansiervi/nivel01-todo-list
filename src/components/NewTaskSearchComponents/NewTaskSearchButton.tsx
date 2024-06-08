import styles from "./NewTaskSearchButton.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTaskSearchButton() {
  return (
    <a href="#" className={styles.button}>
      <span>Criar</span>
      <PlusCircle size={16} className={styles.plusCircle} weight="bold" />
    </a>
  );
}
