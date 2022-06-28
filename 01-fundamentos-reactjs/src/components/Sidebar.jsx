import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1656236684807-31076b60628d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
      />

      <div className={styles.profile}>
        <img
          src={"https://avatars.githubusercontent.com/u/40086551?v=4"}
          alt=""
        />
        <strong>Henrique Albuquerque</strong>
        <span>Fullstack Engineer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine height={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
