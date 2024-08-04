import { ChangeEvent } from "react";
import styles from "./NewTaskSearch.module.css";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

interface NewTaskSearchProps {
  searchedTask: string;
  onChangeTask: (taskName: string) => void;
  onCreateTask: (taskName: string) => void;
}

export function NewTaskSearch({
  searchedTask,
  onChangeTask,
  onCreateTask,
}: NewTaskSearchProps) {
  function handleFormSubmit(event: React.FormEvent) {
    event?.preventDefault();
    // console.log(`${handleFormSubmit.name} ${searchedTask}`);
    onCreateTask(searchedTask);
  }

  function handleTypedTask(event: ChangeEvent<HTMLInputElement>) {
    // console.log(`${handleFormSubmit.name} ${event.target.value}`);
    onChangeTask(event.target.value);
  }

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event)}
      className={styles.newTaskSearch}
    >
      <input
        id={uuidv4()}
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => handleTypedTask(event)}
        value={searchedTask}
      />

      <button
        type="submit"
        className={styles.button}
        // disabled={newSearchInputOnBlur.length === 0}
      >
        <span>Criar</span>
        <PlusCircle size={16} className={styles.plusCircle} weight="bold" />
      </button>
    </form>
  );
}
