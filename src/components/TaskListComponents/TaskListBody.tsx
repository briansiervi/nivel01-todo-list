import { Task, TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";
import { v4 as uuidv4 } from "uuid";

interface TaskListBodyProps {
  tasks: TaskProps[];
  onDeleteTask: (taskId: number) => void;
  onCrossOutTask: (taskId: number) => void;
}

export function TaskListBody({
  tasks,
  onDeleteTask,
  onCrossOutTask,
}: TaskListBodyProps) {
  return (
    <div className={styles.line}>
      {tasks
        .sort((x) => x.id)
        .map((task) => {
          return (
            <Task
              key={uuidv4()}
              task={task}
              onDeleteTask={onDeleteTask}
              onCrossOutTask={onCrossOutTask}
            />
          );
        })}
    </div>
  );
}
