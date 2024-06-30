import { useState } from "react";
import styles from "./Task.module.css";
import { TaskCheckBox } from "./TaskCheckBox";
import { TaskLabel } from "./TaskLabel";
import { TaskTrash } from "./TaskTrash";
import { v4 as uuidv4 } from "uuid";

export interface TaskProps {
  id: number;
  description: string;
  checked: boolean;
}

interface InternalTaskProps {
  task: TaskProps;
  onDeleteTask: (taskid: number) => void;
}

export function Task(props: InternalTaskProps) {
  const [isTaskCrossedOut, setCrossOutTask] = useState(false);

  function crossOutTask() {
    event?.preventDefault();
    setCrossOutTask(!isTaskCrossedOut);
  }

  return (
    <div className={styles.line}>
      <div className={styles["inner-line"]}>
        <TaskCheckBox
          key={uuidv4()}
          id={props.task.id.toString()}
          taskId={props.task.id}
          value={props.task.id.toString()}
          onCrossOutTask={crossOutTask}
          isTaskCrossedOut={isTaskCrossedOut}
        />
        <TaskLabel
          key={uuidv4()}
          taskid={props.task.id}
          htmlFor={props.task.id.toString()}
          description={props.task.description}
          onCrossOutTask={crossOutTask}
          isTaskCrossedOut={isTaskCrossedOut}
        />
        <TaskTrash taskid={props.task.id} onDeleteTask={props.onDeleteTask} />
      </div>
    </div>
  );
}
