import './global-styles.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks/Tasks";
import {useState} from "react";
import AddTaskForm from "./components/AddTaskForm";


const App = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Task 1',
            description: 'task description',
            reminder: true
        },
        {
            id: 2,
            title: 'Task 2',
            description: 'task description',
            reminder: true
        }
    ]);
    const [showAddTaskForm, setShowAddTaskForm] = useState(true);

    const addTask = (newTask) => {
        setTasks((prevTasks) => {
            newTask.id = prevTasks.length + 1;
            return [...prevTasks, newTask];
        })
    }

    const toggleAddTaskForm = () => {
        setShowAddTaskForm((prevShowAddTaskForm) => {
            return !prevShowAddTaskForm;
        });
    }

    const toggleReminder = (id) => {
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            return newTasks.map((task) => {
                return task.id === id ? {...task, reminder: !task.reminder} : task;
            })

        });
    }

    const removeTask = (id) => {
        setTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            return newTasks.filter((task) =>  task.id !== id );
        });

    }

    return (
        <div className="container">
            <Header onToggleAddTaskForm={toggleAddTaskForm} formShown={showAddTaskForm}/>
            {showAddTaskForm && <AddTaskForm onAddTask={addTask}/>}
            <Tasks tasks={tasks} onToggleReminder={toggleReminder} onRemoveTask={removeTask}/>
        </div>
    );
}

export default App;