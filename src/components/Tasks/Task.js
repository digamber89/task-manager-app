import {FaTimes, FaBell, FaRegBell} from "react-icons/fa";

const Task = ({task, onToggleReminder, onRemoveTask}) => {
    const {title, id, description, reminder} = task;
    return (
        <>
            <div className={"task-header"}>
                <div className="task-reminder">
                    {
                        reminder ? <FaBell color={'green'} onDoubleClick={() => onToggleReminder(id)}/> : <FaRegBell onDoubleClick={() => onToggleReminder(id)}/>
                    }
                </div>
                <h2 className={id}>{title}</h2>
                <FaTimes className={"removeTask"} color={"red"} onClick={() => onRemoveTask(id)}/>
            </div>

            <p>{description}</p>
        </>
    );
}

export default Task;