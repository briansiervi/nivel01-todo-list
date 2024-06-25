import { Task, TaskPropsWithoutEvents } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";
import { v4 as uuidv4 } from "uuid";

interface TaskListBodyProps {
  tasks: TaskPropsWithoutEvents[];
  onDeleteTask: (taskid: string) => void;
}

export function TaskListBody({ tasks, onDeleteTask }: TaskListBodyProps) {
  return (
    <div className={styles.line}>
      {tasks.map((task) => {
        return <Task key={uuidv4()} task={task} onDeleteTask={onDeleteTask} />;
      })}
    </div>
  );
}
