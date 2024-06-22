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
  const [isTaskCrossedOut, setCrossOutTask] = useState(false);
  const [isTaskDeleted, setDeleteTask] = useState(false);

  function crossOutTask() {
    setCrossOutTask(!isTaskCrossedOut);
  }

  function deleteTask() {
    console.log("deleteTask");
    setDeleteTask(!isTaskDeleted);
  }

  const taskCheckBoxId = uuidv4();

  return (
    <div className={styles.line}>
      <div className={styles["inner-line"]}>
        <TaskCheckBox
          id={taskCheckBoxId}
          value={props.description}
          onCrossOutTask={crossOutTask}
          isTaskCrossedOut={isTaskCrossedOut}
        />
        <TaskLabel
          htmlFor={taskCheckBoxId}
          id={props.id}
          description={props.description}
          onCrossOutTask={crossOutTask}
          isTaskCrossedOut={isTaskCrossedOut}
        />
        <TaskTrash onDeleteTask={deleteTask} />
      </div>
    </div>
  );
}
