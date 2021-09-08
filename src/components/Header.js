import Button from "./Button";

const Header = ({onToggleAddTaskForm,formShown}) => {
    return (
        <div className="header">
            <h1>Task Manager</h1>
            <Button text={formShown ? "Cancel" : "Add Task"} onClick={onToggleAddTaskForm}/>
        </div>
    );
}

export default Header;