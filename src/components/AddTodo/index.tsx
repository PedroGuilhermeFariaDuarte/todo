import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import format from "date-fns/format"
import ptBR from "date-fns/locale/pt-BR"

// Assets
import iconPlus from "../../assets/icons/plus.svg"
import { ITodo } from "../Todo/types"

// Styles
import styles from "./styles.module.css"

// Types
import { IAddTodoProps } from "./types"
import { IListGroup } from "../ListTodo/types"

export function AddTodo({ onAddTodo }: IAddTodoProps){

    const [todoContent, setTodoContent] = useState("")
    const [groupsTodo, setGroupsTodo] = useState<Array<IListGroup>>([])
    const [todoDateTimeStart, setTodoDateTimeStart] = useState(new Date().toLocaleDateString().split('/').reverse().join('-') + ' ' + new Date().toLocaleTimeString())
    const [todoDateTimeEnd, setTodoDateTimeEnd] = useState(new Date().toLocaleDateString().split('/').reverse().join('-') + ' ' + new Date().toLocaleTimeString())

    const todoHasContent = todoContent.length > 0 && true
    const todoDateMinStart = new Date().toLocaleDateString().split('/').reverse().join('-')
    const todoDateMinEnd = new Date().toLocaleDateString().split('/').reverse().join('-')

    useEffect(() => {
        if(groupsTodo.length > 0) {
            localStorage.setItem('TODO@GROUPS_TODO', JSON.stringify(groupsTodo || []))
            onAddTodo(groupsTodo)
        }
    },[groupsTodo])    

    useEffect(() => {
        try {
            const listGroupsTodoRecovery = JSON.parse(localStorage.getItem("TODO@GROUPS_TODO") || "[]") || []

            if (groupsTodo.length <= 0) setGroupsTodo(listGroupsTodoRecovery)
        } catch (error) {
            console.log('AddTodo@error ~ useEffect on load', error)
        }
    }, [])

    function handleSubmitTodoForm(event: FormEvent) {
        try {
            if(!event) return

            event.preventDefault()

            const newTodo: ITodo = {
                id: new Date().getTime(),
                dateTimeStart: todoDateTimeStart,
                dateTimeEnd: todoDateTimeEnd,
                content: todoContent, 
                checked: false
            }

            if (newTodo.id > 0) {
                setNewGroupTodo(newTodo)            
            }else{
                return
            }                
            
            (event.target as HTMLFormElement)?.input?.setCustomValidity('')     
            setTodoContent("")
        } catch (error) {
            console.log("AddTodoComponent@error ~ AddTodo", error)
        }
    }

    function setNewGroupTodo(newTodo: ITodo){
        try {
            if(!newTodo) return
                    
            const todoDateStart = new Date(newTodo.dateTimeStart)
            const todoDateStartDayName = format(todoDateStart, "EEEE", {
                locale: ptBR
            })
            const actualGroupTodoToDayName = groupsTodo.find(groupTodo => groupTodo.name === todoDateStartDayName)
            const groupID = todoDateStart.getTime()
            
            newTodo.groupID = groupID

            if (actualGroupTodoToDayName) {

                actualGroupTodoToDayName.updatedAt = new Date()
                actualGroupTodoToDayName.items.push(newTodo)
                            
                setGroupsTodo((actualGroupsTodo: Array<IListGroup>) => {
                    const groupTodoToDayIndex = actualGroupsTodo.findIndex(groupTodo => groupTodo.id === actualGroupTodoToDayName.id)
                    actualGroupsTodo[groupTodoToDayIndex] = actualGroupTodoToDayName                    

                    return actualGroupsTodo
                })
                
                return
            }

            const newGroupTodo: IListGroup = {
                id: groupID,
                items: [newTodo],
                createdAt: new Date(),
                name: todoDateStartDayName
            }

            setGroupsTodo(actualGroupsTodo => [...actualGroupsTodo, newGroupTodo])            
        } catch (error) {
            console.log("AddTodoComponent@error", error)
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

            (event.target as HTMLInputElement)?.setCustomValidity('Informe o conteudo do seu novo Todo')
        } catch (error) {
            console.log('AddTodo@error ~ handleNewTodoContent', error)
        }
    }

    function handleShowCalendar(event: any) {
        try {                        
            const elementDataPicker = (event.target as HTMLButtonElement).nextSibling as HTMLInputElement                    

            elementDataPicker?.showPicker()
        } catch (error) {
            console.log('AddTodoComponente@error ~ handleShowCalendar')
        }
    }

    function handlerTodoDate(event: ChangeEvent<HTMLInputElement>, callback: Function = () => ({})){
        try {
            if(!event || !callback) return
            
            const dateTimeValue = new Date(event.target.value).toLocaleDateString().split('/').reverse().join('-') + ' ' + new Date(event.target.value).toLocaleTimeString()    

            callback(dateTimeValue)
        } catch (error) {
            console.log('AddTodoComponent@error ~ handlerTodoDate', error)
        }
    }

    return <>             
        <form action="#" onSubmit={handleSubmitTodoForm} className={styles.formAddTodo}>            
            <input 
                type="text" 
                placeholder="Adicione uma nova tarefa" 
                onChange={handleNewTodoContent}
                className={`${!todoHasContent ? 'remove-caret' : '' }`}
                value={todoContent}                 
                onInvalid={handleNewTodoContentIsInvalid}
                required/>
            <label>
                <div className={styles.todoConfig}>
                    <button type="button" title="Inserir uma data de inicio" className={styles.buttonTodoDate} onClick={handleShowCalendar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#4EA8DE" className="bi bi-calendar-event" viewBox="0 0 16 16">
                            <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                        </svg>                        
                        <input type="datetime-local" name="event-start" id="event-start"  onChange={(event) => handlerTodoDate(event, setTodoDateTimeStart)} value={todoDateTimeStart} min={todoDateMinStart} />
                    </button>
                    <button type="button" title="Inserir uma data de finalização" className={styles.buttonTodoDate} onClick={handleShowCalendar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color="#4EA8DE" fill="#4EA8DE" className="bi bi-calendar2-check" viewBox="0 0 16 16">
                            <path d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                            <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                        </svg>
                        <input type="datetime-local" name="event-end" id="event-end"  onChange={(event) => handlerTodoDate(event, setTodoDateTimeEnd)} value={todoDateTimeEnd} min={todoDateMinEnd} />
                    </button>
                </div>
                <div className={styles.todoConfig}>
                    <input type="date" name="" id="" />
                </div>                
            </label>
            <button type="submit" disabled={!todoHasContent ? true : false}>
                Criar 
                {/* <img src={iconPlus} alt="Um circulo branco com um sibolo de MAIS no centro" /> */}
            </button>
        </form>
    </>
}