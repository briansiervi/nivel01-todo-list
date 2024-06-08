import { Button } from "./Button";
import { NewTaskInput } from "./NewTaskInput";
import styles from "./NewTaskSearch.module.css";

export function NewTaskSearch() {
  return (
    <div className={styles.newTaskSearch}>
      <NewTaskInput />
      <Button />
    </div>
  );
}
