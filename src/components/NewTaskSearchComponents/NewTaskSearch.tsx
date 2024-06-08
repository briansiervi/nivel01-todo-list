import { NewTaskSearchButton } from "./NewTaskSearchButton";
import { NewTaskSearchInput } from "./NewTaskSearchInput";
import styles from "./NewTaskSearch.module.css";

export function NewTaskSearch() {
  return (
    <div className={styles.newTaskSearch}>
      <NewTaskSearchInput />
      <NewTaskSearchButton />
    </div>
  );
}
