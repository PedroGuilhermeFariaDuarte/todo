// Global Components
import { Todo } from "../Todo"

// Types
import { IListTodoProps } from "./types"

// Styles
import styles from "./styles.module.css"

export function ListTodo({list}: IListTodoProps){

    const hasListOfTodos = list && list?.length <= 0 && true

    return <>
            <div className={styles.listTodo}>
                <div className={styles.header}>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Tarefas criadas</p>
                        <span className={styles.count}>
                            {
                                list ? list.length : 0
                            }
                        </span>
                    </div>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Concluídas</p>
                        <span className={styles.count}>
                        
                        {
                            list ? list.filter(todo => todo.checkded ).length : 0
                        }
                        
                        {' de '}

                        {
                            list ? list.length : 0
                        }
                        </span>
                    </div>
                </div>
                <ul>
                    {
                        !hasListOfTodos ? 'Nenhum item disponível' : ''
                    }
                    {
                    list && list.map(todo => <Todo key={todo.id} todo={todo}/>)
                    }
                   
                </ul>
            </div>
    </>
}