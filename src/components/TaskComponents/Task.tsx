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
  onDeleteTask: (taskId: number) => void;
  onCrossOutTask: (taskId: number) => void;
}

export function Task(props: InternalTaskProps) {
  return (
    <div className={styles.line}>
      <div className={styles["inner-line"]}>
        <TaskCheckBox
          key={uuidv4()}
          id={props.task.id.toString()}
          taskId={props.task.id}
          value={props.task.id.toString()}
          onCrossOutTask={() => props.onCrossOutTask(props.task.id)}
          checked={props.task.checked}
        />
        <TaskLabel
          key={uuidv4()}
          taskId={props.task.id}
          htmlFor={props.task.id.toString()}
          description={props.task.description}
          onCrossOutTask={() => props.onCrossOutTask(props.task.id)}
          checked={props.task.checked}
        />
        <TaskTrash taskId={props.task.id} onDeleteTask={props.onDeleteTask} />
      </div>
    </div>
  );
}
