import { Trash } from "phosphor-react";
import styles from "./TaskTrash.module.css";
import { v4 as uuidv4 } from "uuid";

interface TaskTrashProps {
  taskid: string;
  onDeleteTask: (taskId: string) => void;
}

export function TaskTrash(props: TaskTrashProps) {
  function handleDeleteTask() {
    props.onDeleteTask(props.taskid);
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
