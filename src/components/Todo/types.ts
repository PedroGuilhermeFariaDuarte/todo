export interface ITodoProps {
    todo: ITodo
    onRemoveTodo: Function
    onCheckTodo: Function
}

export interface ITodo {
    id: number
    content: string,
    checked: boolean
}