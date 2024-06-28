import styles from "./NewTaskSearchButton.module.css";
import { PlusCircle } from "phosphor-react";

interface NewTaskSearchButtonProps {
  onClick: () => void;
}

export function NewTaskSearchButton({ onClick }: NewTaskSearchButtonProps) {
  function handleNewTask() {
    onClick();
  }

  return (
    <a href="#" className={styles.button} onClick={handleNewTask}>
      <span>Criar</span>
      <PlusCircle size={16} className={styles.plusCircle} weight="bold" />
    </a>
  );
}
