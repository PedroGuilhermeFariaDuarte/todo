// Global Components
import { Todo } from "../Todo"
import { AddTodo } from "../AddTodo"

// Global Types
import { ITodo } from "../Todo/types"

// Types
import { IListGroup, IListTodoProps } from "./types"

// Styles
import styles from "./styles.module.css"
import { useState } from "react"

export function ListTodo({  }: IListTodoProps) {
    const [listGroupsTodo, setListGroupsTodo] = useState<Array<IListGroup>>([])    

    function handleAddTodo(newListGroupTodo: Array<IListGroup>) {
        try {
            console.log(newListGroupTodo)
            if (!newListGroupTodo || newListGroupTodo.length <= 0) return

            setListGroupsTodo(newListGroupTodo) 
        } catch (error) {
            console.log("ListTodoComponent@error ~ handleAddTodo", error)
        }
    }

    function handleRemoveTodo(todoID: number) {
        try {
            if (!todoID || todoID <= 0) return

            const listTodoWithoutID = listGroupsTodo.filter(todo => todo.id !== todoID)

            setListGroupsTodo(listTodoWithoutID)
        } catch (error) {
            console.log('ListTodoComponent@error ~ handleRemoveTodo', error)
        }
    }

    function handleCheckTodo(todoID: number) {
        try {
            if (!todoID || todoID <= 0) return

            let listTodoCached = listGroupsTodo

            const todoToCheck = listTodoCached.find(todo => todo.id === todoID)

            if (todoToCheck) todoToCheck.checked = !todoToCheck.checked

            const todoChecked = todoToCheck
         
            if (todoChecked) {
                listTodoCached = listTodoCached.filter(todo => todo.id !== todoID)

                listTodoCached.push(todoChecked)
            }

            setListGroupsTodo(listTodoCached)  
        } catch (error) {
            console.log('ListTodoComponent@error ~ handleRemoveTodo', error)
        }
    }

    return <>
        <AddTodo onAddTodo={handleAddTodo} /> 

        <div className='wrapper'>
            <div className={styles.listTodo}>
               
                <ul>
                    {
                    listGroupsTodo?.length <= 0 ? 'Nenhuma tarefa disponível' : ''
                    }
                    
                    {
                        listGroupsTodo && listGroupsTodo.map(groupTodo => {                           
                            return <> 
                                <div className={styles.header}>
                                    <div className={styles.itemHeader}>
                                        <p className="itemTitle">Tarefas criadas</p>
                                        <span className={styles.count}>
                                            {
                                                listGroupsTodo ? listGroupsTodo.length : 0
                                            }
                                        </span>
                                    </div>
                                    <div className={styles.itemHeader}>
                                        <p className="itemTitle">Concluídas</p>
                                        <span className={styles.count}>

                                            {
                                                groupTodo.items ? groupTodo.items.filter(todo => todo.checked ).length : 0
                                            }

                                            {' de '}

                                            {
                                                groupTodo.items ? groupTodo.items.length : 0
                                            }
                                        </span>
                                    </div>
                                </div>                               
                                <span key={groupTodo.id}>{groupTodo.name} - atualizado em {groupTodo.id}</span>
                                {
                                    groupTodo.items && groupTodo.items.map(todo => {
                                        return <>
                                            {todo.id}
                                            <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} onCheckTodo={handleCheckTodo} />
                                        </>
                                    })
                                }
                            </>
                        })
                    }                    
                </ul>
            </div>
        </div>
    </>
}