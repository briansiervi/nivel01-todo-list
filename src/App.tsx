import "./global.css";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";
import styles from "./App.module.css";
import { NewTaskSearch } from "./components/NewTaskSearch";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <NewTaskSearch />
        <TaskList />
      </div>
    </>
  );
}
