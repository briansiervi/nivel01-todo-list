import { NewTaskSearchButton } from "./NewTaskSearchButton";
import { NewTaskSearchInput } from "./NewTaskSearchInput";
import styles from "./NewTaskSearch.module.css";

interface NewTaskSearchProps {
  createTask: (taskName: string) => void;
}

export function NewTaskSearch({ createTask }: NewTaskSearchProps) {
  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    // console.log(event.target.taskSearchInput.value);
    createTask(event.target.taskSearchInput.value);
  }

  return (
    <form
      onSubmit={(event) => handleCreateNewTask(event)}
      className={styles.newTaskSearch}
    >
      <NewTaskSearchInput name="taskSearchInput" />
      <NewTaskSearchButton />
    </form>
  );
}
