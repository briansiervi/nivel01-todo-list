import { InputHTMLAttributes, useState } from "react";
import styles from "./NewTaskSearchInput.module.css";
import { v4 as uuidv4 } from "uuid";

interface NewTaskSearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  onBlur: (taskname: string) => void;
}

export function NewTaskSearchInput({
  onBlur,
  ...props
}: NewTaskSearchInputProps) {
  function handleOnBlur(event: React.FocusEvent<HTMLInputElement, Element>) {
    const taskName = event.target.value;
    onBlur(taskName);
  }

  return (
    <input
      key={uuidv4()}
      id={uuidv4()}
      className={styles.newTaskInput}
      onBlurCapture={(event) => handleOnBlur(event)}
      placeholder="Adicione uma nova tarefa"
      {...props}
    />
  );
}
