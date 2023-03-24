import { ACTION_TYPES } from "../constants/actionTypes"

export const addTodoAction = (data) => { 
    return {type: ACTION_TYPES.add, payload: data}
}

export const deleteTodoAction = (data) => {
    return {type: ACTION_TYPES.del, payload: data}
}