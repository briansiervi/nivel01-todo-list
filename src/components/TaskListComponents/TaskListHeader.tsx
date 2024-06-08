import styles from "./TaskListHeader.module.css";
import { TaskListTitle } from "./TaskListTitle";

export function TaskListHeader() {
  return (
    <div className={styles.align}>
      <TaskListTitle title="Tarefas criadas" totalNumber={5} />
      <TaskListTitle
        title="Tarefas concluídas"
        currentNumber={2}
        totalNumber={5}
      />
    </div>
  );
}
