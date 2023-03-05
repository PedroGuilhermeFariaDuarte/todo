// Global Types
import { ITodo } from "../Todo/types";

export interface IListTodoProps {
    
}

export interface IListGroup {
    id: number,
    name: string,
    items: Array<ITodo>
}