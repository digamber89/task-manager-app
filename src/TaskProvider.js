import React, {useReducer, useContext} from "react";

const TaskContext = React.createContext();
const TaskContextUpdater = React.createContext();

export const useTask = () => {
    return useContext(TaskContext);
};

export const useTaskUpdate = () => {
    return useContext(TaskContextUpdater);
};

const TaskProvider = ({children}) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "add":
                let id = state.length + 1;
                action.newTask.id = id;
                return [...state, action.newTask];
            case "remove":
                return state.filter((task) => {
                    return task.id !== action.id
                })
            case "toggleReminder":
                return state.map((task) => {
                    return task.id === action.id ? {...task, reminder: !task.reminder} : task
                })
            default:
                throw new Error();
        }
    };
    
    const [tasks, modifyTasks] = useReducer(reducer, [
        {
            id: 1,
            title: "Task 1",
            description: "task description",
            reminder: true,
        },
        {
            id: 2,
            title: "Task 2",
            description: "task description",
            reminder: true,
        },
    ]);

    return (
        <TaskContext.Provider value={tasks}>
            <TaskContextUpdater.Provider value={modifyTasks}>{children}</TaskContextUpdater.Provider>
        </TaskContext.Provider>
    );
};

export default TaskProvider;
