import "./global.css";
import { useState } from "react";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskListComponents/TaskList";
import styles from "./App.module.css";
import { NewTaskSearch } from "./components/NewTaskSearchComponents/NewTaskSearch";

export function App() {
  const [storedTask, setStoreTask] = useState("");
  const [task, setNewTask] = useState("");

  function storeTask(taskName: string) {
    console.log("storeTask");
    console.log(taskName);
    setStoreTask(taskName);
  }

  function newTask() {
    console.log("newTask");
    const newTask = "teste";
    setNewTask(newTask);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskSearch onBlur={storeTask} onClick={newTask} />
        <TaskList />
      </div>
    </>
  );
}
