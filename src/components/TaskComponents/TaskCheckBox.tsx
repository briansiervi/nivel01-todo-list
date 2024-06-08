import styles from "./TaskCheckBox.module.css";

export function TaskCheckBox() {
  return <input type="checkbox" className={styles.taskCheck} />;
}
