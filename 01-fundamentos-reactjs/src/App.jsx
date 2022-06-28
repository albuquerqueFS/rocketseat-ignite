import { Header } from "./components/Header";
import { Post } from "./components/Post";
import "./global.css";

import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post></Post>
          <Post></Post>
        </main>
      </div>
    </>
  );
}

export default App;
