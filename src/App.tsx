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
    checked: false,
    isTaskCrossedOut: false,
  };

  const initialTasks: TaskProps[] = [
    {
      id: 1,
      description:
        "Tarefa 01. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit.",
      checked: false,
      isTaskCrossedOut: false,
    },
    {
      id: 2,
      description: "aaaaa",
      checked: false,
      isTaskCrossedOut: false,
    },
    {
      id: 3,
      description: "bbbbb",
      checked: false,
      isTaskCrossedOut: false,
    },
    {
      id: 4,
      description: "ccccc",
      checked: false,
      isTaskCrossedOut: false,
    },
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchedTask, setSearchedTask] = useState("");

  function onChangeTask(taskName: string) {
    // console.log(`${onChangeTask.name} ${taskName}`);
    setSearchedTask(taskName);
  }

  function onCreateTask(taskName: string) {
    // console.log(`${onCreateTask.name} ${taskName}`);
    const id = tasks.length + 1;

    const newTask: TaskProps = {
      id: id,
      description: taskName,
      checked: false,
      isTaskCrossedOut: false,
    };

    const newTasks = [...tasks, newTask];

    // console.log(`newTasks: ${JSON.stringify(newTask)}`);
    setSearchedTask("");
    setTasks(newTasks);
  }

  function deleteTask(taskId: number) {
    console.log(`deleteTask ${taskId}`);
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function crossOutTask(taskId: number) {
    console.log(`crossOutTask: ${taskId}`);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskSearch
          searchedTask={searchedTask}
          onChangeTask={onChangeTask}
          onCreateTask={onCreateTask}
        />
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          onCrossOutTask={crossOutTask}
        />
      </div>
    </>
  );
}
