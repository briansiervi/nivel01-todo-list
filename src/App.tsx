import "./global.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskListComponents/TaskList";
import styles from "./App.module.css";
import { NewTaskSearch } from "./components/NewTaskSearchComponents/NewTaskSearch";
import { TaskProps } from "./components/TaskComponents/Task";

export function App() {
  const initialTasks: TaskProps[] = [];

  // const initialTasks: TaskProps[] = [
  //   {
  //     id: 1,
  //     description: "aaaaa",
  //     checked: false,
  //   },
  //   {
  //     id: 2,
  //     description: "bbbbb",
  //     checked: false,
  //   },
  //   {
  //     id: 3,
  //     description: "ccccc",
  //     checked: false,
  //   },
  //   {
  //     id: 4,
  //     description: "ddddd",
  //     checked: false,
  //   },
  // ];

  const [tasks, setTasks] = useState(initialTasks);
  const [searchedTask, setSearchedTask] = useState("");

  function onChangeTask(taskName: string) {
    setSearchedTask(taskName);
  }

  function onCreateTask(taskName: string) {
    const id = tasks.length + 1;

    const newTask: TaskProps = {
      id: id,
      description: taskName,
      checked: false,
    };

    const newTasks = [...tasks, newTask].sort((a, b) =>
      a.description.localeCompare(b.description)
    );

    setSearchedTask("");
    setTasks(newTasks);
  }

  function deleteTask(taskId: number) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function crossOutTask(taskId: number) {
    let currentTask: TaskProps = tasks.filter((task) => task.id === taskId)[0];
    currentTask.checked = !currentTask.checked;

    const anotherTasks: TaskProps[] = tasks.filter(
      (task) => task.id !== taskId
    );

    const notCheckedTasks: TaskProps[] = [...anotherTasks, currentTask]
      .filter((x) => x.checked === false)
      .sort((a, b) => a.description.localeCompare(b.description));

    const checkedTasks: TaskProps[] = [...anotherTasks, currentTask]
      .filter((x) => x.checked === true)
      .sort((a, b) => a.description.localeCompare(b.description));

    let counter: number = 0;
    const newTasks: TaskProps[] = notCheckedTasks
      .concat(checkedTasks)
      .map((x) => {
        return {
          id: counter++,
          description: x.description,
          checked: x.checked,
        };
      });

    setTasks(newTasks);
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
