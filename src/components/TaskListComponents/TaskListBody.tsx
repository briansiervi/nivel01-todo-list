import { Task, TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";

interface TaskListBodyProps {
  tasks: TaskProps[];
}

export function TaskListBody(props: TaskListBodyProps) {
  return (
    <div className={styles.line}>
      {props.tasks.map((task) => {
        return <Task description={task.description} />;
      })}
    </div>
  );
}
