import { useState } from "react";
import styles from "./TaskList.module.css";
import { TaskListBody } from "./TaskListBody";
import { TaskListHeader } from "./TaskListHeader";

export function TaskList() {
  const initialTasks = [
    {
      id: "task01",
      description:
        "Tarefa 01. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit.",
    },
    {
      id: "task02",
      description:
        "Tarefa 02. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit.",
    },
    {
      id: "task03",
      description:
        "Tarefa 03. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit.",
    },
  ];

  const [tasks, setDeleteTask] = useState(initialTasks);

  function deleteTask(taskid: string) {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    setDeleteTask(newTasks);
  }

  return (
    <div className={styles.taskList}>
      <TaskListHeader />
      <TaskListBody tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}
