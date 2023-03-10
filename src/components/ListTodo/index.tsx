import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

// Global Components
import { Todo } from "../Todo"
import { AddTodo } from "../AddTodo"

// Types
import { IListGroup, IListTodoProps } from "./types"

// Styles
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

export function ListTodo({  }: IListTodoProps) {
    const [listGroupsTodo, setListGroupsTodo] = useState<Array<IListGroup>>([])  
    
    const actualDateDayName = format(new Date(), "EEEE", {
        locale: ptBR
    })   

    function handleAddTodo(newListGroupTodo: Array<IListGroup>) {
        try {            
            if (!newListGroupTodo || newListGroupTodo.length <= 0) return

            console.log('New groups', newListGroupTodo)
            console.log('Actual groups', listGroupsTodo)

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
                {
                    listGroupsTodo?.length <= 0 ? 'Nenhumo grupo de tarefas dispon??vel' : ''
                }
                
                {
                    listGroupsTodo && [listGroupsTodo.find(groupTodo => groupTodo.name === actualDateDayName)].map((groupTodo,index) => {                           
                        return groupTodo && <ul key={index} className={styles.listTodoContent}>
                            <p className={styles.groupHeader}>
                                <span className="font-bold text-upper-first cursor-default user-no-select">
                                    {
                                        groupTodo.items && groupTodo.items.length > 0 ? groupTodo.name : ''
                                    }
                                </span>
                                {
                                    groupTodo.updatedAt && groupTodo.items.length > 0 ?
                                        <>
                                            <span className={`cursor-default user-no-select ${styles.genralInformation}`}> - atualizado em {groupTodo.updatedAt?.toLocaleString()} </span>
                                        </>
                                        :
                                        <></>
                                }
                            </p>

                            <div className={styles.header} >
                                <div className={styles.itemHeader}>
                                    <p className="itemTitle">Tarefas criadas</p>
                                    <span className={`cursor-default user-no-select ${styles.count}`}>
                                        {
                                            groupTodo ? groupTodo.items.length : 0
                                        }
                                    </span>
                                </div>
                                <div className={styles.itemHeader}>
                                    <p className="itemTitle">Conclu??das</p>
                                    <span className={`cursor-default user-no-select ${styles.count}`}>

                                        {
                                            groupTodo.items ? groupTodo.items.filter(todo => todo.checked).length : 0
                                        }

                                        {' de '}

                                        {
                                            groupTodo.items ? groupTodo.items.length : 0
                                        }
                                    </span>
                                </div>
                            </div>

                            {
                                groupTodo.items && groupTodo.items.length <= 0 ? `${'Nenhuma tarefa dispon??vel para ' + groupTodo.name}` : ''
                            }
                            {
                                groupTodo.items && groupTodo.items.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={handleRemoveTodo} onCheckTodo={handleCheckTodo} />)
                            }
                        </ul>
                    })
                }                                    
            </div>
        </div>
    </>
}