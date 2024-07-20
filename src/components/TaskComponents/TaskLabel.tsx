import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  taskId: number;
  description: string;
  onCrossOutTask: () => void;
  isTaskCrossedOut: boolean;
  htmlFor: string;
}

export function TaskLabel({
  taskId,
  description,
  onCrossOutTask,
  isTaskCrossedOut,
  htmlFor,
  ...rest
}: TaskLabelProps) {
  function handleCrossOutTask(
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) {
    event?.preventDefault();
    console.log(`TaskLabel handleCrossOutTask: ${taskId}`);
    onCrossOutTask();
  }

  return (
    <label
      className={isTaskCrossedOut ? styles["inner-line-crossed-out"] : ""}
      onClick={(event) => handleCrossOutTask(event)}
      htmlFor={htmlFor}
      {...rest}
    >
      {description}
    </label>
  );
}
