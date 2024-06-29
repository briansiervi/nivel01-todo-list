import { InputHTMLAttributes } from "react";
import styles from "./NewTaskSearchInput.module.css";
import { v4 as uuidv4 } from "uuid";

export function NewTaskSearchInput({
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      key={uuidv4()}
      id={uuidv4()}
      className={styles.newTaskInput}
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  );
}
