import { Task, TaskProps } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";
import { v4 as uuidv4 } from "uuid";
import { ClipboardText } from "phosphor-react";

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
    <>
      {tasks.length > 0 ? (
        <div className={styles.taskList}>
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
      ) : (
        <div className={styles.emptyList}>
          <ClipboardText size={56} weight="duotone" />
          <p className={styles.emptyListTitle}>
            Você ainda não tem tarefas cadastradas
          </p>
          <p className={styles.emptyListBody}>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}
    </>
  );
}
