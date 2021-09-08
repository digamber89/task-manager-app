import './global-styles.css';
import Header from "./components/Header";
import Tasks from "./components/Tasks/Tasks";
import {useState} from "react";
import AddTaskForm from "./components/AddTaskForm";
import TaskProvider from "./TaskProvider";


const App = () => {
    const [showAddTaskForm, setShowAddTaskForm] = useState(true);
    const toggleAddTaskForm = () => {
        setShowAddTaskForm((prevShowAddTaskForm) => {
            return !prevShowAddTaskForm;
        });
    }

    return (
        <div className="container">
            <TaskProvider>
                <Header onToggleAddTaskForm={toggleAddTaskForm} formShown={showAddTaskForm}/>
                {showAddTaskForm && <AddTaskForm/>}
                <Tasks/>
            </TaskProvider>
        </div>
    );
}

export default App;