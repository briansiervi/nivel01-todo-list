import { Task } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";

export function TaskListBody() {
  return (
    <div className={styles.line}>
      <Task id="task01" description="Tarefa 01" />
      <Task id="task02" description="Tarefa 02" />
      <Task id="task03" description="Tarefa 03" />
    </div>
  );
}
