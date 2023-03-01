import { ChangeEvent, FormEvent, useState } from "react"

// Assets
import iconPlus from "../../assets/icons/plus.svg"
import { ITodo } from "../Todo/types"

// Styles
import styles from "./styles.module.css"

// Types
import { IAddTodoProps } from "./types"

export function AddTodo({ onAddTodo }: IAddTodoProps){

    const [todoContent, setTodoContent] = useState("")

    const todoHasContent = todoContent.length > 0 && true

    function handleSubmitTodoForm(event: FormEvent) {
        try {
            if(!event) return

            event.preventDefault()
            
            const newTodo: ITodo = {
                id: new Date().getTime(),
                content: todoContent, 
                checked: false
            }

            if(newTodo.id <= 0) return

            if (onAddTodo) onAddTodo(newTodo)

            (event.target?.input as HTMLInputElement) .setCustomValidity('Informe o conteudo do seu novo Todo')
            setTodoContent("")
        } catch (error) {
            console.log("AddTodoComponent@error ~ AddTodo", error)
        }
    }

    function handleNewTodoContent(event: ChangeEvent<HTMLInputElement>) {
        try {
            setTodoContent(event?.target?.value  || '')
        } catch (error) {
            console.log('AddTodo@error ~ handleNewTodoContent', error)
        }
    }

    function handleNewTodoContentIsInvalid(event: FormEvent<HTMLInputElement>) {
        try {
            if (!event) return

            event.target?.setCustomValidity('Informe o conteudo do seu novo Todo')
        } catch (error) {
            console.log('AddTodo@error ~ handleNewTodoContent', error)
        }
    }

    return <>  
        {}      
        <form action="#" onSubmit={handleSubmitTodoForm} className={styles.formAddTodo}>            
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={handleNewTodoContent}
                className={`${!todoHasContent ? 'remove-caret' : '' }`}
                defaultValue={todoContent} 
                onInvalid={handleNewTodoContentIsInvalid}
                required/>
            <label>Descrição da tarefa |</label>
            <button type="submit" disabled={!todoHasContent ? true : false}>
                Criar 
                <img src={iconPlus} alt="Um circulo branco com um sibolo de MAIS no centro" />
            </button>
        </form>
    </>
}