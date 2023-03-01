// Global Components
import { Todo } from "../Todo"
import { AddTodo } from "../AddTodo"

// Global Types
import { ITodo } from "../Todo/types"

// Types
import { IListTodoProps } from "./types"

// Styles
import styles from "./styles.module.css"
import { useState } from "react"

export function ListTodo({  }: IListTodoProps) {
    const [listTodo, setListTodo] = useState<Array<ITodo>>([])    

    function handleAddTodo(newTodo: ITodo) {
        try {
            if (newTodo && newTodo.id <= 0) return                        

            const listTodoWithoutSameID = listTodo.length > 2 ? listTodo.filter(todo => todo.id !== newTodo.id) : listTodo

            setListTodo([...listTodoWithoutSameID, newTodo]) 
        } catch (error) {
            console.log("ListTodoComponent@error ~ handleAddTodo", error)
        }
    }

    function handleRemoveTodo(todoID: number) {
        try {
            if (!todoID || todoID <= 0) return

            const listTodoWithoutID = listTodo.filter(todo => todo.id !== todoID)

            setListTodo(listTodoWithoutID)
        } catch (error) {
            console.log('ListTodoComponent@error ~ handleRemoveTodo', error)
        }
    }

    function handleCheckTodo(todoID: number) {
        try {
            if (!todoID || todoID <= 0) return

            let listTodoCached = listTodo

            const todoToCheck = listTodoCached.find(todo => todo.id === todoID)

            if (todoToCheck) todoToCheck.checked = !todoToCheck.checked

            const todoChecked = todoToCheck
         
            if (todoChecked) {
                listTodoCached = listTodoCached.filter(todo => todo.id !== todoID)

                listTodoCached.push(todoChecked)
            }

            setListTodo(listTodoCached)  
        } catch (error) {
            console.log('ListTodoComponent@error ~ handleRemoveTodo', error)
        }
    }

    return <>
        <AddTodo onAddTodo={handleAddTodo} /> 

        <div className='wrapper'>
            <div className={styles.listTodo}>
                <div className={styles.header}>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Tarefas criadas</p>
                        <span className={styles.count}>
                            {
                                listTodo ? listTodo.length : 0
                            }
                        </span>
                    </div>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Concluídas</p>
                        <span className={styles.count}>
                        
                        {
                            listTodo ? listTodo.filter(todo => todo.checked ).length : 0
                        }
                        
                        {' de '}

                        {
                            listTodo ? listTodo.length : 0
                        }
                        </span>
                    </div>
                </div>
                <ul>
                    {
                    listTodo?.length <= 0 ? 'Nenhum item disponível' : ''
                    }
                    {
                    listTodo && listTodo.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} onCheckTodo={handleCheckTodo}/>)
                    }
                    
                </ul>
            </div>
        </div>
    </>
}