import styles from "./TaskListTitle.module.css";

interface TaskTitleProps {
  title: string;
  currentNumber?: number;
  totalNumber: number;
}

export function TaskListTitle(props: TaskTitleProps) {
  return (
    <div>
      <span
        className={
          props.currentNumber === undefined
            ? styles.principal
            : styles.secundary
        }
      >
        {props.title}
      </span>
      {props.currentNumber === undefined ? (
        <button>
          <span>{props.totalNumber}</span>
        </button>
      ) : (
        <button>
          <span>{props.currentNumber}</span>
          <span> de </span>
          <span>{props.totalNumber}</span>
        </button>
      )}
    </div>
  );
}
