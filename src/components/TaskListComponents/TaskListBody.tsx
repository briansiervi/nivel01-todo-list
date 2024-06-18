import { Task } from "../TaskComponents/Task";
import styles from "./TaskListBody.module.css";

export function TaskListBody() {
  return (
    <div className={styles.line}>
      <Task
        id="task01"
        description="Tarefa 01. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit."
      />
      <Task
        id="task02"
        description="Tarefa 02. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit."
      />
      <Task
        id="task03"
        description="Tarefa 03. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi ea ex non illum obcaecati explicabo? Cupiditate, animi vitae cum laudantium magnam incidunt neque facere eligendi ab! Itaque quis quas velit."
      />
    </div>
  );
}
