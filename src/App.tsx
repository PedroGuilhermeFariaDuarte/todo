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
    <p className="footer-text">
      <a href="https://github.com/PedroGuilhermeFariaDuarte/todo/tree/v2" target="_blank" rel="noopener noreferrer">todo</a>    
      {" "}
      ©       
      is licensed under 
      {" "}
      <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="noopener noreferrer">CC BY-NC-ND 4.0 </a>    
    </p>
  </>
}

export default App
