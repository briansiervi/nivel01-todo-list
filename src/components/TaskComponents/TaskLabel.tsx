import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  taskid: number;
  description: string;
  onCrossOutTask: () => void;
  isTaskCrossedOut: boolean;
  htmlFor: string;
}

export function TaskLabel({
  description,
  onCrossOutTask,
  isTaskCrossedOut,
  htmlFor,
  ...props
}: TaskLabelProps) {
  function handleCrossOutTask() {
    onCrossOutTask();
  }

  return (
    <label
      className={isTaskCrossedOut ? styles["inner-line-crossed-out"] : ""}
      onClick={handleCrossOutTask}
      htmlFor={htmlFor}
      {...props}
    >
      {description}
    </label>
  );
}
