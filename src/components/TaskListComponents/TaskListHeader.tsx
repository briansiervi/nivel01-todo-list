import { TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListHeader.module.css";
import { TaskListTitle } from "./TaskListTitle";

interface TaskListHeaderProps {
  tasks: TaskProps[];
}

export function TaskListHeader({ tasks }: TaskListHeaderProps) {
  return (
    <div className={styles.align}>
      <TaskListTitle title="Tarefas criadas" totalNumber={tasks.length} />
      <TaskListTitle
        title="Concluídas"
        currentNumber={tasks.filter((task) => task.checked === true).length}
        totalNumber={tasks.length}
      />
    </div>
  );
}
