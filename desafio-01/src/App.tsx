import styles from "./App.module.css";
import { AddTask } from "./components/addtask/AddTask";
import { Header } from "./components/header/Header";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <AddTask />
    </>
  );
}

export default App;
