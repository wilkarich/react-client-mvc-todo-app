import {combineReducers} from 'redux';
import {taskReducer} from "./taskReducer";
import {categoryReducer} from "./categoryReducer";
import {filterTasksReducer} from "./filterTasksReducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    categories: categoryReducer,
    filteredTasks: filterTasksReducer
});

export type RootState = ReturnType<typeof rootReducer>;