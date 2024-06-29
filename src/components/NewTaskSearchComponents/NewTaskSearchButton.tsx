import styles from "./NewTaskSearchButton.module.css";
import { PlusCircle } from "phosphor-react";

export function NewTaskSearchButton() {
  return (
    <button type="submit" className={styles.button}>
      <span>Criar</span>
      <PlusCircle size={16} className={styles.plusCircle} weight="bold" />
    </button>
  );
}
