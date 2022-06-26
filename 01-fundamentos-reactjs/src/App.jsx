import { Header } from "./components/Header";
import { Post } from "./Post";
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
          <Post
            author="Henrique Albuquerque"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
          ></Post>
          <Post
            author="HEHE Albuquerque"
            content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?"
          ></Post>
        </main>
      </div>
    </>
  );
}

export default App;
