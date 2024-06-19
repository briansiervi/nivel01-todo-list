import styles from "./Task.module.css";
import { TaskCheckBox } from "./TaskCheckBox";
import { TaskLabel } from "./TaskLabel";
import { TaskTrash } from "./TaskTrash";
import { v4 as uuidv4 } from "uuid";

export interface TaskProps {
  id?: string;
  description: string;
}

export function Task(props: TaskProps) {
  function deleteTask(id: string) {
    console.log("deleteTask");
  }

  return (
    <div className={styles.line}>
      <div className={styles["line-internal"]}>
        <TaskCheckBox
          id={uuidv4()}
          value={props.description}
          onDeleteTask={deleteTask}
        />
        <TaskLabel
          htmlFor={uuidv4()}
          id={props.id}
          description={props.description}
        />
        <TaskTrash />
      </div>
    </div>
  );
}
