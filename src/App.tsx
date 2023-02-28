// Global Styles
import "./styles/fonts/index.css"
import "./styles/variables/index.css"
import "./styles/global/index.css"

// Styles
import styles from "./App.module.css"

// Global Components
import { Header } from "./components/Header"
import { AddTodo } from "./components/AddTodo"
import { ListTodo } from "./components/ListTodo"

function App() {

  return <>
    <Header />
    <AddTodo />
    <div className={styles.wrapper}>
      <ListTodo />
    </div>
  </>
}

export default App
