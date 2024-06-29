import "./global.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskListComponents/TaskList";
import styles from "./App.module.css";
import { NewTaskSearch } from "./components/NewTaskSearchComponents/NewTaskSearch";
import { TaskProps } from "./components/TaskComponents/Task";

export function App() {
  const emptyTask: TaskProps = {
    id: 0,
    description: "",
  };

  const initialTasks: TaskProps[] = [
    {
      id: 1,
      description:
        "Tarefa 01. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit.",
    },
    {
      id: 2,
      description: "aaaaa",
    },
    {
      id: 3,
      description: "bbbbb",
    },
    {
      id: 4,
      description: "ccccc",
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);

  function createTask(taskName: string) {
    const id = tasks.length + 1;

    const newTask: TaskProps = {
      id: id,
      description: taskName,
    };

    const newTasks = [...tasks, newTask];

    // console.log(`newTasks: ${JSON.stringify(newTasks)}`);
    setTasks(newTasks);
  }

  function deleteTask(taskid: number) {
    const newTasks = tasks.filter((task) => task.id !== taskid);
    setTasks(newTasks);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskSearch createTask={createTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </div>
    </>
  );
}
