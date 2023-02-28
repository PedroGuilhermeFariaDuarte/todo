// Global Components
import { Todo } from "../Todo"

// Styles
import styles from "./styles.module.css"

export function ListTodo(){
    return <>
            <div className={styles.listTodo}>
                <div className={styles.header}>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Tarefas criadas</p>
                        <span className={styles.count}>5</span>
                    </div>
                    <div className={styles.itemHeader}>
                        <p className="itemTitle">Concluídas</p>
                        <span className={styles.count}>2 de 5</span>
                    </div>
                </div>
                <ul>
                   <Todo />
                </ul>
            </div>
    </>
}