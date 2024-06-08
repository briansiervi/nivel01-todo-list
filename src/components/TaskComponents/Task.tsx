import styles from "./Task.module.css";
import { TaskCheckBox } from "./TaskCheckBox";
import { TaskText } from "./TaskText";
import { TaskTrash } from "./TaskTrash";

export function Task() {
  return (
    <div className={styles.line}>
      <TaskCheckBox />
      <TaskText />
      <TaskTrash />
    </div>
  );
}
