import { Task } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";

export function TaskListBody() {
  return (
    <div className={styles.line}>
      <Task />
      <Task />
      <Task />
    </div>
  );
}
