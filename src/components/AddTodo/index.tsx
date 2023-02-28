// Styles
import styles from "./styles.module.css"

// Assets
import iconPlus from "../../assets/icons/plus.svg"

export function AddTodo(){
    return <>
        <form action="#" className={styles.formAddTodo}>
            <input type="text" placeholder="Adicione uma nova tarefa" className="remove-caret"/>
            <label>Descrição da tarefa |</label>
            <button type="button">
                Criar 
                <img src={iconPlus} alt="Um circulo branco com um sibolo de MAIS no centro" />
            </button>
        </form>
    </>
}