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

    function handleRemoveTodo(todoID: number, groupID: number) {
        try {
            if (!todoID || todoID <= 0) return

            const groupFromTodo = listGroupsTodo.find(groupTodo => groupTodo.id === groupID)

            if (!groupFromTodo) return

            const groupTodoItemsWithoutID = groupFromTodo && groupFromTodo.items.filter(todo => todo.id !== todoID)

            groupFromTodo.items = groupTodoItemsWithoutID || []
            groupFromTodo.updatedAt = new Date()
            
            setListGroupsTodo(listGroupsTodo => {
                return [
                    ...listGroupsTodo.filter(groupTodo => groupTodo.id !== groupFromTodo.id),
                    groupFromTodo
                ]
            })
        } catch (error) {
            console.log('ListTodoComponent@error ~ handleRemoveTodo', error)
        }
    }

    function handleCheckTodo(todoID: number, groupID: number) {
        try {
            if (!todoID || todoID <= 0) return

            const groupFromTodo = listGroupsTodo.find(groupTodo => groupTodo.id === groupID)

            if (!groupFromTodo) return

            const todoToCheck = groupFromTodo.items.find(todo => todo.id === todoID)

            if (todoToCheck) todoToCheck.checked = !todoToCheck.checked

            const todoChecked = todoToCheck
         
            if (todoChecked) {
                const listTodoCached = groupFromTodo.items.filter(todo => todo.id !== todoID)

                listTodoCached.push(todoChecked)

                groupFromTodo.items = listTodoCached

                groupFromTodo.updatedAt = new Date()
            }            

            setListGroupsTodo(listGroupsTodo => {
                return [
                    ...listGroupsTodo.filter(groupTodo => groupTodo.id !== groupFromTodo.id),
                    groupFromTodo
                ]
            })
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
                    listGroupsTodo?.length <= 0 ? 'Nenhuma grupo disponível' : ''
                    }
                    
                    {
                        listGroupsTodo && listGroupsTodo.map(groupTodo => {                           
                            return <> 
                                <div className={styles.header}>
                                    <div className={styles.itemHeader}>
                                        <p className="itemTitle">Tarefas criadas</p>
                                        <span className={styles.count}>
                                            {
                                                groupTodo ? groupTodo.items.length : 0
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

                                <p key={groupTodo.id}>
                                    {
                                        groupTodo.items && groupTodo.items.length > 0 ? groupTodo.name  : ''
                                    }                                    
                                    {
                                        groupTodo.updatedAt ?
                                            <>
                                            <span> - atualizado em {groupTodo.updatedAt?.toLocaleString()} </span>
                                            </>
                                        :
                                        <></>
                                    }
                                </p>

                                {
                                    groupTodo.items && groupTodo.items.length <= 0 ? `${'Nenhuma tarefa disponível para ' + groupTodo.name}` : ''
                                }
                                {
                                    groupTodo.items && groupTodo.items.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} onCheckTodo={handleCheckTodo} />)
                                }
                            </>
                        })
                    }                    
                </ul>
            </div>
        </div>
    </>
}