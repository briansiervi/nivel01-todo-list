import { LabelHTMLAttributes } from "react";
import styles from "./TaskLabel.module.css";

interface TaskLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  taskId: number;
  description: string;
  onCrossOutTask: () => void;
  checked: boolean;
  htmlFor: string;
}

export function TaskLabel({
  taskId,
  description,
  onCrossOutTask,
  checked,
  htmlFor,
  ...rest
}: TaskLabelProps) {
  function handleCrossOutTask(
    event: React.MouseEvent<HTMLLabelElement, MouseEvent>
  ) {
    event?.preventDefault();
    onCrossOutTask();
  }

  return (
    <label
      className={checked ? styles["inner-line-checked"] : ""}
      onClick={(event) => handleCrossOutTask(event)}
      htmlFor={htmlFor}
      {...rest}
    >
      {description}
    </label>
  );
}
