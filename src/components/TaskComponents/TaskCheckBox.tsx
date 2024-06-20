import { InputHTMLAttributes } from "react";
import styles from "./TaskCheckBox.module.css";

interface TaskCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  value: string;
  onDeleteTask: (taskId: string) => void;
}

export function TaskCheckBox(props: TaskCheckBoxProps) {
  function handleDeleteTask() {
    props.onDeleteTask(props.id);
  }

  return (
    <input
      type="checkbox"
      className={styles.taskCheck}
      {...props}
      onClick={handleDeleteTask}
    />
  );
}
