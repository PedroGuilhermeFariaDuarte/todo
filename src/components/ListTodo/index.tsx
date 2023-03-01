// Global Components
import { Todo } from "../Todo"

// Global Types
import { ITodo } from "../Todo/types"

// Types
import { IListTodoProps } from "./types"

// Styles
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export function ListTodo({todo}: IListTodoProps) {
    const [listTodo, setListTodo] = useState<Array<ITodo>>([])
    const hasListOfTodos = listTodo && listTodo?.length <= 0 && true

    useEffect(() => {
        if(todo) setListTodo(listTodo => [...listTodo, todo])
    }, [todo ])

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

            if (todoToCheck) todoToCheck.checked = true

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
                        !hasListOfTodos ? 'Nenhum item disponível' : ''
                    }
                    {
                    listTodo && listTodo.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} onCheckTodo={handleCheckTodo}/>)
                    }
                   
                </ul>
            </div>
    </>
}