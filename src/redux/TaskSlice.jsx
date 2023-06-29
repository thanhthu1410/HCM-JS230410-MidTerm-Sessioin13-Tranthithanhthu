import { createSlice } from "@reduxjs/toolkit";


const taskSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        addToDo: (state, action) => {

            return [
                ...state, action.payload
            ]
        },
        updateToDo: (state, action) => {

            return state.map((task) => {
                if (task.id === action.payload.id) {

                    return {
                        ...task,
                        task: action.payload.task,
                        status: action.payload.status,

                    }
                } else {
                    return task
                }

            })
        },
        updateStatus: (state, action) => {

            return state.map((task) => {
                if (task.id === action.payload.id) {

                    return {
                        ...task,
                        task: action.payload.task,
                        status: action.payload.status,

                    }
                } else {
                    return task
                }

            })
        },
        removeToDo: (state, action) => {
            console.log(action.payload)
            return state.filter((task) =>
                task.id !== action.payload)
        }

    }
})

export const { addToDo, updateToDo, removeToDo, updateStatus } = taskSlice.actions
export default taskSlice.reducer