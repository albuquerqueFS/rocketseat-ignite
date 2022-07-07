import styles from "./Header.module.css";
import todoLogo from "../../assets/todo_logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={todoLogo} alt="Icone do todo" />
        <span className={styles.blue}>to</span>
        <span className={styles.purple}>do</span>
      </div>
    </header>
  );
}
