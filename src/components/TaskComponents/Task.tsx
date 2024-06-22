import { useState } from "react";
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
  const [isLineCrossedOut, setCrossedOut] = useState(false);

  function crossOutTask() {
    console.log(event);
    setCrossedOut(!isLineCrossedOut);
  }

  const taskCheckBoxId = uuidv4();

  return (
    <div className={styles.line}>
      <div
        className={
          isLineCrossedOut
            ? styles["inner-line-crossed-out"]
            : styles["inner-line"]
        }
      >
        <TaskCheckBox
          id={taskCheckBoxId}
          value={props.description}
          onCrossOutTask={crossOutTask}
        />
        <TaskLabel
          htmlFor={taskCheckBoxId}
          id={props.id}
          description={props.description}
          onCrossOutTask={crossOutTask}
        />
        <TaskTrash />
      </div>
    </div>
  );
}
