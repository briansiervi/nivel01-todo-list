import styles from "./TaskList.module.css";
import { TaskListBody } from "./TaskListBody";
import { TaskListHeader } from "./TaskListHeader";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <TaskListHeader />
      <TaskListBody />
    </div>
  );
}
