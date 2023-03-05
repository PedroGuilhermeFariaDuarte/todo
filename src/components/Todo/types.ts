export interface ITodoProps {
    todo: ITodo
    onRemoveTodo: Function
    onCheckTodo: Function
}

export interface ITodo {
    id: number
    groupID?: number,
    content: string,
    checked: boolean,
    dateTimeStart: string,
    dateTimeEnd: string
}