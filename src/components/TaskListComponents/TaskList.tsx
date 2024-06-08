import styles from "./TaskList.module.css";
import { TaskListHeader } from "./TaskListHeader";

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <TaskListHeader />
      <div>Lista de tarefas</div>
    </div>
  );
}
