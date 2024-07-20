import { Trash } from "phosphor-react";
import styles from "./TaskTrash.module.css";
import { v4 as uuidv4 } from "uuid";

interface TaskTrashProps {
  taskId: number;
  onDeleteTask: (taskId: number) => void;
}

export function TaskTrash(props: TaskTrashProps) {
  function handleDeleteTask() {
    props.onDeleteTask(props.taskId);
  }

  return (
    <Trash
      key={uuidv4()}
      size={16}
      className={styles.icon}
      weight="bold"
      onClick={handleDeleteTask}
    />
  );
}
