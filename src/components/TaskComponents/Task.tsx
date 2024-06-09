import styles from "./Task.module.css";
import { TaskCheckBox } from "./TaskCheckBox";
import { TaskLabel } from "./TaskLabel";
import { TaskTrash } from "./TaskTrash";

interface TaskProps {
  id: string;
  description: string;
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.line}>
      <TaskCheckBox id={props.id} />
      <TaskLabel htmlFor={props.id} description={props.description} />
      <TaskTrash />
    </div>
  );
}
