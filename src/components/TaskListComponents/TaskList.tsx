import styles from "./TaskList.module.css";
import { TaskListBody } from "./TaskListBody";
import { TaskListHeader } from "./TaskListHeader";
import { TaskProps } from "../TaskComponents/Task";

interface TaskListProps {
  tasks: TaskProps[];
  onDeleteTask: (taskid: number) => void;
}

export function TaskList({ tasks, onDeleteTask }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <TaskListHeader tasks={tasks} />
      <TaskListBody tasks={tasks} onDeleteTask={onDeleteTask} />
    </div>
  );
}
