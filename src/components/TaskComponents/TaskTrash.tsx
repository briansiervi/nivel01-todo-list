import { Trash } from "phosphor-react";
import styles from "./TaskTrash.module.css";

interface TaskTrashProps {
  onDeleteTask: () => void;
}

export function TaskTrash(props: TaskTrashProps) {
  function handleDeleteTask() {
    props.onDeleteTask();
  }

  return (
    <Trash
      size={16}
      className={styles.icon}
      weight="bold"
      onClick={handleDeleteTask}
    />
  );
}
