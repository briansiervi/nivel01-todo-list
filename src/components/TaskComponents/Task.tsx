import styles from "./Task.module.css";
import { TaskCheckBox } from "./TaskCheckBox";
import { TaskText } from "./TaskText";
import { TaskTrash } from "./TaskTrash";

interface TaskProps {
  name: string;
  description: string;
}

export function Task(props: TaskProps) {
  return (
    <div className={styles.line}>
      <TaskCheckBox name={props.name} />
      <TaskText htmlFor={props.name} description={props.description} />
      <TaskTrash />
    </div>
  );
}
