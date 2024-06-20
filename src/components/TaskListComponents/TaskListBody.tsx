import { Task, TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";
import { v4 as uuidv4 } from "uuid";

interface TaskListBodyProps {
  tasks: TaskProps[];
}

export function TaskListBody(props: TaskListBodyProps) {
  return (
    <div className={styles.line}>
      {props.tasks.map((task) => {
        return <Task key={uuidv4()} description={task.description} />;
      })}
    </div>
  );
}
