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
    <a href="#" className={styles.button}>
      <span>Criar</span>
      <PlusCircle
        size={16}
        className={styles.plusCircle}
        weight="bold"
        onClick={handleNewTask}
      />
    </a>
  );
}
