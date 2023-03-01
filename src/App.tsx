import { useState } from "react"

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

// Types
import { ITodo } from "./components/Todo/types"

function App() {
  const [todo, setTodo] = useState<ITodo | null>(null)

  function handleMiddlewareAddTodo(newTodo: ITodo){
    try {
      if (newTodo && newTodo.id > 0) setTodo(newTodo)
    } catch (error) {
      console.log("MainComponent@error ~ handleMiddlewareAddTodo", error)
    }
  }

  return <>
    <Header />
    <AddTodo onAddTodo={handleMiddlewareAddTodo} />
    <div className={styles.wrapper}>
      <ListTodo todo={todo}/>
    </div>
  </>
}

export default App
