import { ClipboardText, PlusCircle } from "phosphor-react";
import { useState } from "react";
import styles from "./AddTask.module.css";

export function AddTask() {
  const [tasks, setTasks] = useState(0);
  const [concludedTasks, setConcludedTasks] = useState(0);

  return (
    <section className={styles.wrapper}>
      <section className={styles.addTask}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button>
          Criar <PlusCircle size={16} />
        </button>
      </section>

      <section className={styles.tasks}>
        <header>
          <div className={styles.notDone}>
            <p className={styles.label}>Tarefas criadas</p>
            <p className={styles.amount}>{tasks}</p>
          </div>
          <div className={styles.done}>
            <p className={styles.label}>Concluídas</p>
            <p className={styles.amount}>{tasks}</p>
          </div>
        </header>
      </section>

      <section className={styles.taskList}>
        <ClipboardText size={56} color={"#333333"} />
      </section>
    </section>
  );
}
