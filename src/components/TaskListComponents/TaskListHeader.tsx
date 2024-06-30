import { TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListHeader.module.css";
import { TaskListTitle } from "./TaskListTitle";

export function TaskListHeader(props: TaskProps[]) {
  return (
    <div className={styles.align}>
      <TaskListTitle title="Tarefas criadas" totalNumber={props.tasks.length} />
      <TaskListTitle
        title="Concluídas"
        currentNumber={
          props.tasks.filter((task) => task.checked === true).length
        }
        totalNumber={props.tasks.length}
      />
    </div>
  );
}
