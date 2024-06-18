import { Trash } from "phosphor-react";
import styles from "./TaskTrash.module.css";

export function TaskTrash() {
  return <Trash size={16} className={styles.icon} weight="bold" />;
}
