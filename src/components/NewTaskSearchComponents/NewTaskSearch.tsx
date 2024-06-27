import { NewTaskSearchButton } from "./NewTaskSearchButton";
import { NewTaskSearchInput } from "./NewTaskSearchInput";
import styles from "./NewTaskSearch.module.css";

interface NewTaskSearchProps {
  onBlur: (task: string) => void;
  onClick: () => void;
}

export function NewTaskSearch({ onBlur, onClick }: NewTaskSearchProps) {
  return (
    <form className={styles.newTaskSearch}>
      <NewTaskSearchInput onBlur={onBlur} />
      <NewTaskSearchButton onClick={onClick} />
    </form>
  );
}
