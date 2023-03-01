import { useState } from "react"

// Global Styles
import "./styles/fonts/index.css"
import "./styles/variables/index.css"
import "./styles/global/index.css"

// Global Components
import { Header } from "./components/Header"
import { ListTodo } from "./components/ListTodo"


function App() {
  return <>
    <Header />      
    <ListTodo />    
  </>
}

export default App
