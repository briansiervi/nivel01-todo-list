import { ButtonHTMLAttributes } from "react";
import styles from "./NewTaskSearchButton.module.css";
import { PlusCircle } from "phosphor-react";

interface NewTaskSearchButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function NewTaskSearchButton({
  text,
  ...props
}: NewTaskSearchButtonProps) {
  return (
    <button type="submit" className={styles.button}>
      <span {...props}>{text}</span>
      <PlusCircle size={16} className={styles.plusCircle} weight="bold" />
    </button>
  );
}
