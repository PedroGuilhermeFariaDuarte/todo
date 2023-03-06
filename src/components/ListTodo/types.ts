// Global Types
import { ITodo } from "../Todo/types";

export interface IListTodoProps {
    
}

export interface IListGroup {
    id: number,
    name: string,
    updatedAt?: Date
    createdAt: Date
    items: Array<ITodo>
}