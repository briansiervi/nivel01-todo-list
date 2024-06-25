import styles from "./NewTaskSearchInput.module.css";
import { v4 as uuidv4 } from "uuid";

export function NewTaskSearchInput() {
  return (
    <>
      <input key={uuidv4()} id={uuidv4()} className={styles.newTaskInput} />
    </>
  );
}
