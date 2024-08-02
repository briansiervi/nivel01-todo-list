import { ChangeEvent } from "react";
import styles from "./NewTaskSearch.module.css";
import { v4 as uuidv4 } from "uuid";
import { PlusCircle } from "phosphor-react";

interface NewTaskSearchProps {
  searchedTask: string;
  inputOnChange: (taskName: string) => void;
  createTask: (taskName: string) => void;
}

export function NewTaskSearch({
  searchedTask,
  inputOnChange,
  createTask,
}: NewTaskSearchProps) {
  function handleFormSubmit(event: React.FormEvent) {
    event?.preventDefault();
    console.log(`handleFormSubmit ${event.target.value}`);
    createTask(event.target.value);
  }

  function handleTypedTask(event: ChangeEvent<HTMLInputElement>) {
    console.log(`handleTypedTask ${event.target.value}`);
    inputOnChange(event.target.value);
  }

  // const [newSearchInputOnBlur, setNewSearchInputOnBlur] = useState("");

  // function handleNewSearchInputOnChange(
  //   event: React.FormEvent<HTMLInputElement>
  // ) {
  //   console.log(event.target.value);
  //   setNewSearchInputOnBlur(event.target.value);
  // }

  return (
    <form
      onSubmit={(event) => handleFormSubmit(event)}
      className={styles.newTaskSearch}
    >
      <input
        key={uuidv4()}
        id={uuidv4()}
        className={styles.newTaskInput}
        placeholder="Adicione uma nova tarefa"
        onChange={(event) => handleTypedTask(event)}
        value={searchedTask}
        // onBlurCapture={(event) => handleNewSearchInputOnChange(event)}
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
