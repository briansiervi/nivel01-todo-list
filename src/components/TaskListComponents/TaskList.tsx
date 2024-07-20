import styles from "./TaskList.module.css";
import { TaskListBody } from "./TaskListBody";
import { TaskListHeader } from "./TaskListHeader";
import { TaskProps } from "../TaskComponents/Task";

interface TaskListProps {
  tasks: TaskProps[];
  onDeleteTask: (taskId: number) => void;
  onCrossOutTask: (taskId: number) => void;
}

export function TaskList({
  tasks,
  onDeleteTask,
  onCrossOutTask,
}: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <TaskListHeader tasks={tasks} />
      <TaskListBody
        tasks={tasks}
        onDeleteTask={onDeleteTask}
        onCrossOutTask={onCrossOutTask}
      />
    </div>
  );
}
