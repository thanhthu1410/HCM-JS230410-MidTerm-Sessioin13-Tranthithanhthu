import { configureStore } from "@reduxjs/toolkit";
import TaskSlice from "./TaskSlice";

const store = configureStore({
    reducer : {
        todoList : TaskSlice
    }
})

export default store ;