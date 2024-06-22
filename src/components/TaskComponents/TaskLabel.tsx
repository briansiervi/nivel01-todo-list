import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  description: string;
  onCrossOutTask: () => void;
  isTaskCrossedOut: boolean;
}

export function TaskLabel({
  description,
  onCrossOutTask,
  isTaskCrossedOut,
  ...props
}: TaskLabelProps) {
  function handleCrossOutTask() {
    onCrossOutTask();
  }

  return (
    <label
      className={isTaskCrossedOut ? styles["inner-line-crossed-out"] : ""}
      onClick={handleCrossOutTask}
      {...props}
    >
      {description}
    </label>
  );
}
