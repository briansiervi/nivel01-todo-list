import { InputHTMLAttributes } from "react";
import styles from "./TaskCheckBox.module.css";

interface TaskCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  taskId: string;
  value: string;
  onCrossOutTask: () => void;
  isTaskCrossedOut: boolean;
}

export function TaskCheckBox({
  taskId,
  value,
  onCrossOutTask,
  isTaskCrossedOut,
  ...props
}: TaskCheckBoxProps) {
  function handleCrossOutTask() {
    onCrossOutTask();
  }

  return (
    <input
      type="checkbox"
      className={
        isTaskCrossedOut
          ? styles["taskCheck-checked"]
          : styles["taskCheck-not-checked"]
      }
      onClick={handleCrossOutTask}
      {...props}
    />
  );
}
